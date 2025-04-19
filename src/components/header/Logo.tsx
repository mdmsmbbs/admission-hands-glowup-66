
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // For mobile auto-animation
    const animationInterval = setInterval(() => {
      setShouldAnimate(prev => !prev);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/e0ec8582-f75c-4662-97df-1fd9094df5f2.png"
        alt="AdmissionHands Logo"
        className={`h-12 sm:h-16 w-auto transition-all duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        } ${shouldAnimate ? 'animate-pulse' : ''}`}
        style={{ 
          transform: `scale(${window.innerWidth <= 768 ? '2.0' : '2.5'})`, 
          transformOrigin: 'center',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
        }}
      />
    </Link>
  );
};

export default Logo;
