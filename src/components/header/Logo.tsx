
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  const firstWord = "Admission";
  const secondWord = "Hands";

  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover="hover"
        className="font-bold text-xl sm:text-2xl md:text-3xl"
      >
        <motion.span
          className="text-blue-600"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          {firstWord}
        </motion.span>
        <motion.span
          className="ml-2 text-medical-600"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          {secondWord}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;
