
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StateTemplate from '@/components/mbbs/StateTemplate';

const MBBSState: React.FC = () => {
  const { stateName } = useParams<{ stateName: string }>();
  const navigate = useNavigate();
  
  // Format state name properly, convert from URL slug to proper name
  const formatStateName = (slug: string): string => {
    if (!slug) return '';
    // Convert kebab-case to Title Case
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    // Handle case when stateName is undefined or invalid
    if (!stateName) {
      console.error('State name parameter is missing');
      navigate('/mbbs-india', { replace: true });
    }
  }, [stateName, navigate]);

  // If no stateName is provided, show a loading state or redirect
  if (!stateName) {
    return <div className="p-8 text-center">Loading state information...</div>;
  }

  return <StateTemplate stateName={formatStateName(stateName)} />;
};

export default MBBSState;
