
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.span 
        className="text-xl sm:text-2xl font-bold text-medical-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, color: '#1D4ED8' }}
        transition={{ duration: 0.3 }}
      >
        Admission Hands
      </motion.span>
    </Link>
  );
};

export default Logo;
