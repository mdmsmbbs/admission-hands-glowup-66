
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/5e1e7f99-8599-4957-a15a-dfc9dc24bc0d.png"
        alt="AdmissionHands Logo"
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
