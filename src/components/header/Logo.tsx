
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  // Define animation variants for the text parts
  const letterVariants = {
    hover: {
      y: [0, -5, 0],
      color: [
        "#1EAEDB", // Bright blue
        "#F97316", // Bright orange
        "#8B5CF6", // Vivid Purple
        "#1EAEDB", // Back to bright blue
      ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Define background animation
  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  // Split text for individual letter animations
  const firstWord = "Admission";
  const secondWord = "Hands";
  
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover="hover"
        variants={containerVariants}
        className="font-bold text-xl sm:text-2xl md:text-3xl transition-all duration-300 flex"
      >
        <motion.span 
          variants={backgroundVariants}
          animate="animate"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
          style={{
            backgroundSize: "300% 100%"
          }}
        >
          {firstWord.split('').map((letter, index) => (
            <motion.span
              key={`first-${index}`}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
        <motion.span 
          variants={backgroundVariants}
          animate="animate"
          className="ml-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          style={{
            backgroundSize: "300% 100%"
          }}
        >
          {secondWord.split('').map((letter, index) => (
            <motion.span
              key={`second-${index}`}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;
