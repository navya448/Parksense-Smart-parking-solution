'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import QRCode from 'react-qr-code';

const BookingForm: React.FC = () => {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({ name: '', vehicle: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold">Booking Confirmed!</h2>
        <p className="mt-4">Your booking for Space {id} is confirmed.</p>
        <QRCode
          value={`Parking Slot: ${id}, Name: ${formData.name}, Vehicle: ${formData.vehicle}`}
          className="mx-auto mt-8"
        />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Book Parking Space {id}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Vehicle Number</label>
          <input
            type="text"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
