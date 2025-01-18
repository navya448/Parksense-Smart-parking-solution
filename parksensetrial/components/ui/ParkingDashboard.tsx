'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for client-side routing in Next.js App Router
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';
import { CarFront, Car } from 'lucide-react';

const ParkingDashboard: React.FC = () => {
  const router = useRouter();

  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, isOccupied: false },
    { id: 2, isOccupied: false },
  ]);

  const handleBookNow = (spaceId: number): void => {
    router.push(`/book/${spaceId}`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Live Parking Status</span>
          <Badge variant="success">
            {parkingSpaces.filter((space) => !space.isOccupied).length} Spaces Available
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {parkingSpaces.map((space) => (
            <div
              key={space.id}
              className={`
                p-6 rounded-lg border-2 transition-all
                ${space.isOccupied 
                  ? 'bg-red-100 border-red-500 dark:bg-red-900/20' 
                  : 'bg-green-100 border-green-500 dark:bg-green-900/20'}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Space {space.id}</span>
                {space.isOccupied ? (
                  <Car className="w-8 h-8 text-red-500" />
                ) : (
                  <CarFront className="w-8 h-8 text-green-500" />
                )}
              </div>
              <div className="mt-2 text-sm">
                {space.isOccupied ? (
                  <span className="text-red-600 dark:text-red-400">Occupied</span>
                ) : (
                  <button
                    onClick={() => handleBookNow(space.id)}
                    className="text-green-600 dark:text-green-400 underline"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ParkingDashboard;
