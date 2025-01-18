from flask import Flask
from flask_socketio import SocketIO
import serial
import time

app = Flask(__name__)
socketio = SocketIO(app)

# Initialize Serial Communication with Arduino (adjust COM port based on your system)
ser = serial.Serial('COM5', 9600, timeout=1)  # Replace 'COM3' with your Arduino's port
time.sleep(2)  # Wait for Arduino to initialize

@app.route('/')
def index():
    return "Smart Parking Backend"

def read_arduino_data():
    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').strip()
            if "Sensor 1:" in line:
                status1 = line.split(":")[1].strip()
            if "Sensor 2:" in line:
                status2 = line.split(":")[1].strip()
                # Send sensor data to the frontend via WebSocket
                socketio.emit('sensor_data', {'sensor1': status1, 'sensor2': status2})
        time.sleep(1)

@socketio.on('connect')
def on_connect():
    print("Frontend connected!")

if __name__ == '__main__':
    # Run a background thread to read serial data
    socketio.start_background_task(target=read_arduino_data)
    socketio.run(app, host="127.0.0.1", port=5001, debug=True)