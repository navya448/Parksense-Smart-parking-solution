# 🚗 ParkSense – Live Parking Availability Dashboard

ParkSense is a responsive web dashboard that displays real-time parking slot availability using simulated sensor data. It supports both free and paid parking views with live occupancy status and a clean UI built with React, Next.js, and TailwindCSS.

---

## ✨ Features

- 📍 **Live Status** of parking spots (Occupied / Available)  
- 🌐 Built with **Next.js App Router**  
- 🎨 UI powered by **TailwindCSS** and **shadcn/ui**  
- 🧠 Real-time updates (simulated via polling `/api/parking-status`)  
- 🔙 Easy navigation with "Go Back to Main Page" buttons  
- 🆓 Views for **Free** and **Paid** parking  

---
## 🧪 Tech Stack

- **Framework**: Next.js (App Router)  
- **Styling**: Tailwind CSS + shadcn/ui  
- **Icons**: Lucide React Icons  
- **Routing**: `next/navigation`  
- **Data Handling**: useState, useEffect, simulated API polling  

---
## 📡 Simulated API
The project uses a dummy /api/parking-status endpoint that returns mock data like:

["0", "1"]

Where:

0 = available
1 = occupied

---
## 📂 Project Structure

Here’s an overview of the repository structure:

```plaintext
.
├── app/                        # Next.js App Router pages (free, paid, main)
│   ├── page.tsx                # Main landing page
│   ├── free/page.tsx           # Free parking dashboard
│   └── paid/page.tsx           # Paid parking dashboard
├── components/                 # Reusable UI components
│   └── ui/
│       ├── ParkingDashboard.tsx        # Dashboard for paid view
│       └── ParkingDashboard-free.tsx   # Dashboard for free view
├── pages/
│   └── api/
│       └── parking-status.ts   # Simulated API returning parking status
├── public/                     # Static assets
├── styles/                     # Tailwind and global styles
├── tests/                      # (optional) Tests for components & API
├── scripts/                    # (optional) Utility scripts if needed
└── README.md                   # Project documentation (this file)
---- 
