
import React from 'react';
import { useParams } from 'react-router-dom';
import StateTemplate from '@/components/mbbs/StateTemplate';

const MBBSState: React.FC = () => {
  const { stateName } = useParams<{ stateName: string }>();
  
  // Format state name properly, convert from URL slug to proper name
  const formatStateName = (slug: string): string => {
    // Convert kebab-case to Title Case
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return <StateTemplate stateName={formatStateName(stateName || '')} />;
};

export default MBBSState;
