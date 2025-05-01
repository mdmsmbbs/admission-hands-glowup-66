
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="font-bold text-xl sm:text-2xl md:text-3xl text-medical-600 hover:text-medical-700 transition-all duration-300"
      >
        Admission Hands
      </motion.div>
    </Link>
  );
};

export default Logo;
