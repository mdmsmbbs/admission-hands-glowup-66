
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl sm:text-2xl font-bold text-medical-700">
        Admission Hands
      </span>
    </Link>
  );
};

export default Logo;
