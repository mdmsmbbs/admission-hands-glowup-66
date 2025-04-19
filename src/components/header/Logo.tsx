
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/e0ec8582-f75c-4662-97df-1fd9094df5f2.png"
        alt="AdmissionHands Logo"
        className="h-16 w-auto transition-transform duration-300 hover:scale-110"
        style={{ 
          transform: 'scale(2.5)', 
          transformOrigin: 'center',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
        }}
      />
    </Link>
  );
};

export default Logo;
