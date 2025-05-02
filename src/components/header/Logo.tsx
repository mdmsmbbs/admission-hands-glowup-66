
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
        className="font-bold text-xl sm:text-2xl md:text-3xl flex items-center"
      >
        {/* Indian Flag inspired tricolor design */}
        <div className="relative">
          {/* Saffron section */}
          <motion.div
            className="absolute -left-2 -top-1 h-2 w-full bg-[#FF9933] rounded-t-md opacity-80"
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* White section with Ashoka Chakra hint */}
          <motion.div 
            className="absolute -left-2 top-1 h-2 w-full bg-white opacity-80 flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-1.5 w-1.5 rounded-full border border-[#000080] opacity-70"></div>
          </motion.div>
          
          {/* Green section */}
          <motion.div
            className="absolute -left-2 top-3 h-2 w-full bg-[#138808] opacity-80 rounded-b-md"
            whileHover={{ scale: 1.05, y: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text with tricolor gradient effect */}
          <div className="relative z-10 flex">
            <motion.span
              className="bg-gradient-to-b from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent"
              style={{ textShadow: "0px 0px 1px rgba(0,0,0,0.1)" }}
            >
              {firstWord}
            </motion.span>
            <motion.span
              className="ml-2 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent"
              style={{ textShadow: "0px 0px 1px rgba(0,0,0,0.1)" }}
            >
              {secondWord}
            </motion.span>
          </div>
          
          {/* Add a subtle patriotic glow on hover */}
          <motion.div
            className="absolute inset-0 -z-10 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 0.15, 
              boxShadow: "0 0 15px rgba(255,153,51,0.4), 0 0 15px rgba(19,136,8,0.4)" 
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;
