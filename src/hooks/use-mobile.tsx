
import { useState, useEffect } from "react";

// Increased mobile breakpoint to better match standard device sizes
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    // Initial check function that handles both width and user agent
    const checkIsMobile = () => {
      const isMobileByWidth = window.innerWidth < MOBILE_BREAKPOINT;
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileByWidth || isMobileByAgent);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add event listener for resize events with throttling
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkIsMobile, 100);
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", checkIsMobile);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", checkIsMobile);
      clearTimeout(resizeTimer);
    };
  }, []);

  return isMobile;
}
