
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/2dc684b9-feb6-42a9-a077-0275db07d2ec.png"
        alt="AdmissionHands Logo"
        className="h-12 sm:h-16 w-auto"
        style={{ 
          transform: `scale(${window.innerWidth <= 768 ? '1.8' : '2.2'})`, 
          transformOrigin: 'center'
        }}
      />
    </Link>
  );
};

export default Logo;
