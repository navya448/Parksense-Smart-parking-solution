from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import serial
import asyncio
import threading
import time

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable to store parking status
parking_status = {
    "spot1Empty": True,
    "spot2Empty": True
}

# Serial port settings
SERIAL_PORT = 'COM5'
BAUD_RATE = 9600

# Define a thread-safe method to read from the serial port
def read_from_arduino():
    try:
        # Initialize serial communication
        ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
        time.sleep(2)  # Allow Arduino to initialize
        print(f"Connected to {SERIAL_PORT} at {BAUD_RATE} baud.")

        while True:
            # Check if data is available on the serial port
            if ser.in_waiting > 0:
                data = ser.readline().decode('utf-8').strip()
                # Update parking status based on Arduino message
                if "Spot 1: Car detected!" in data:
                    parking_status["spot1Empty"] = False
                elif "Spot 2: Car detected!" in data:
                    parking_status["spot2Empty"] = False
                elif "Spot 1: Empty." in data:
                    parking_status["spot1Empty"] = True
                elif "Spot 2: Empty." in data:
                    parking_status["spot2Empty"] = True
                print(f"Updated parking status: {parking_status}")
    except serial.SerialException as e:
        print(f"Error: {e}")
    finally:
        if 'ser' in locals() and ser.is_open:
            ser.close()
            print("Serial port closed.")

# Start the serial reading in a separate thread
def start_serial_thread():
    thread = threading.Thread(target=read_from_arduino, daemon=True)
    thread.start()

@app.on_event("startup")
async def startup_event():
    # Start reading from Arduino in the background
    start_serial_thread()

@app.get("/api/parking-status")
async def get_parking_status():
    return parking_status

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
