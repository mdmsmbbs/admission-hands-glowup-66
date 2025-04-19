
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/5f59b0ad-1549-4a27-be70-e09b7f63806c.png"
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
