'use client';

import { useState, useEffect } from 'react';
import HydrationErrorSuppressor from './HydrationErrorSuppressor';

export function SafeHydrationProvider({
  children,
  fallback = null
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  
  // This useEffect will only run once the component is mounted client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Render the HydrationErrorSuppressor regardless of mount state
  // to suppress errors during hydration
  return (
    <>
      <HydrationErrorSuppressor />
      {isMounted ? children : fallback}
    </>
  );
} 