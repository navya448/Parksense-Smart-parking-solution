'use client';
import ParkingDashboard from '../../components/ui/ParkingDashboard';
import React from 'react';
import { useRouter } from 'next/navigation'; // Import the router

const FreeParking: React.FC = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle going back to the main page
  const handleGoBack = () => {
    router.push('/'); // Navigate to the main page
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold text-center">Available Paid Parking</h1>
      <p className="mt-4 text-center">Here’s a list of all the available free parking spaces that you can also book:</p>
      
      {/* Parking Dashboard Section */}
      <section className="mt-6">
        <ParkingDashboard />
      </section>

      {/* Go Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-black transition"
        >
          Go Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default FreeParking;
