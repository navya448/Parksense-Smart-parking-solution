'use client';
import ParkingDashboard from '../../components/ui/ParkingDashboard-free';

import React from 'react';

const FreeParking: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold text-center">Available Free Parking</h1>
      <p className="mt-4 text-center">Here’s a list of all the available free parking spaces:</p>
      {/* Replace this with real data */}
      <section className="mt-6">
              <ParkingDashboard />
          </section>
    </div>
  );
};

export default FreeParking;
