import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';
import { CarFront, Car } from 'lucide-react';

const ParkingDashboard = () => {
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, isOccupied: false },
    { id: 2, isOccupied: false }
  ]);

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/parking-status');
        const data = await response.json();
        setParkingSpaces([
          { id: 1, isOccupied: !data.spot1Empty },
          { id: 2, isOccupied: !data.spot2Empty }
        ]);
      } catch (error) {
        console.error('Error fetching parking data:', error);
      }
    };

    const interval = setInterval(fetchParkingData, 1000);
    return () => clearInterval(interval);
  }, []);

  const availableSpaces = parkingSpaces.filter(space => !space.isOccupied).length;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Live Parking Status</span>
          <Badge variant={availableSpaces > 0 ? "success" : "destructive"}>
            {availableSpaces} Spaces Available
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
                  <span className="text-green-600 dark:text-green-400">Available</span>
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