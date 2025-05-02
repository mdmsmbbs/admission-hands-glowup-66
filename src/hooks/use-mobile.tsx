
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkIsMobile = () => {
      // Check both screen width and user agent for better detection
      const isMobileByWidth = window.innerWidth < MOBILE_BREAKPOINT
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileByWidth || isMobileByAgent)
    }
    
    // Set initial value
    checkIsMobile()
    
    // Add event listener
    window.addEventListener("resize", checkIsMobile)
    
    // Check on orientation change as well
    window.addEventListener("orientationchange", checkIsMobile)
    
    // Clean up
    return () => {
      window.removeEventListener("resize", checkIsMobile)
      window.removeEventListener("orientationchange", checkIsMobile)
    }
  }, [])

  return isMobile
}
