
import React from 'react';
import { Link } from 'react-router-dom';

const LiveAlerts = () => {
  return (
    <div className="bg-medical-50 border-b">
      <div className="container-custom py-2">
        <div className="flex items-center justify-between space-x-4 overflow-x-auto whitespace-nowrap text-sm">
          <span className="font-medium text-medical-700 shrink-0">Latest Updates:</span>
          <Link to="/mbbs-india" className="text-medical-600 hover:text-medical-800 shrink-0">
            NEET PG 2024 Counselling Schedule Released
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/mbbs-india" className="text-medical-600 hover:text-medical-800 shrink-0">
            MBBS India: New Guidelines for Foreign Medical Graduates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveAlerts;
