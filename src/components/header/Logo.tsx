
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.img
        src="/lovable-uploads/d9673770-4460-4e66-8bce-933f71123b8a.png"
        alt="Admission Hands Logo"
        width={50}
        height={50}
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="h-10 w-10 object-contain"
      />
      <span 
        className="text-xl sm:text-2xl font-bold text-medical-700 hidden sm:inline"
      >
        Admission Hands
      </span>
    </Link>
  );
};

export default Logo;
