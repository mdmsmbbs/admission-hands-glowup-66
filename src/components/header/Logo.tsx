
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold text-medical-700">
        Admission<span className="text-medical-500">Hands</span>
      </span>
    </Link>
  );
};

export default Logo;
