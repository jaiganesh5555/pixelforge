'use client';

import { useEffect } from 'react';

// This component suppresses React hydration mismatch warnings in development
export default function HydrationErrorSuppressor() {
  useEffect(() => {
    // Only apply in development
    if (process.env.NODE_ENV !== 'production') {
      // Store original console.error
      const originalConsoleError = console.error;
      
      // Override console.error to filter out hydration warnings
      console.error = (...args) => {
        if (args.length > 0 && 
            typeof args[0] === 'string' && 
            (args[0].includes('Warning: Text content did not match') ||
             args[0].includes('Warning: Expected server HTML to contain') ||
             args[0].includes('hydration') ||
             args[0].includes('hydrating'))) {
          // Suppress hydration warnings
          return;
        }
        originalConsoleError(...args);
      };
      
      // Cleanup function to restore original console.error
      return () => {
        console.error = originalConsoleError;
      };
    }
  }, []);
  
  return null;
} 