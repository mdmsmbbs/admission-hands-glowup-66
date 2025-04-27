
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.img
        src="/lovable-uploads/12e86969-b579-43b5-9f4c-7442f78114e5.png"
        alt="Admission Hands Logo"
        width={50}
        height={50}
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="h-10 w-10 object-contain"
      />
    </Link>
  );
};

export default Logo;
