
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/lovable-uploads/2dc684b9-feb6-42a9-a077-0275db07d2ec.png"
        alt="AdmissionHands Logo"
        className="h-12 sm:h-16 w-auto"
      />
      <span className="text-xl sm:text-2xl font-bold text-medical-700 hidden sm:block">
        Admission Hands
      </span>
    </Link>
  );
};

export default Logo;
