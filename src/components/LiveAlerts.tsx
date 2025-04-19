
import React from 'react';
import { Link } from 'react-router-dom';

interface Alert {
  id: number;
  title: string;
  link: string;
  imageUrl?: string;
}

const alerts: Alert[] = [
  {
    id: 1,
    title: "NEET PG 2024 Counselling Schedule Released",
    link: "/mbbs-india",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=100"
  },
  {
    id: 2,
    title: "MBBS India: New Guidelines for Foreign Medical Graduates",
    link: "/mbbs-india",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=100"
  },
  {
    id: 3,
    title: "Last Date Extended for NRI Quota Applications",
    link: "/mbbs-india/nri-quota",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=100"
  },
  {
    id: 4,
    title: "New Medical Colleges Added to Maharashtra List",
    link: "/mbbs-india/maharashtra",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=100"
  }
];

const LiveAlerts = () => {
  return (
    <div className="bg-white border-b sticky top-[48px] z-40 shadow-sm">
      <div className="container-custom py-2">
        <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
          {alerts.map((alert) => (
            <Link
              key={alert.id}
              to={alert.link}
              className="flex items-center space-x-2 shrink-0 hover:bg-gray-50 p-1.5 rounded-md transition-colors group"
            >
              {alert.imageUrl && (
                <img
                  src={alert.imageUrl}
                  alt={alert.title}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-sm text-gray-700 group-hover:text-medical-600">
                {alert.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAlerts;
