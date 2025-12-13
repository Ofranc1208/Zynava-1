import { useState, useEffect } from 'react';

export const useResponsiveColumns = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [gridColumns, setGridColumns] = useState('1fr');

  useEffect(() => {
    setIsMounted(true);
    
    const updateGrid = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setGridColumns('1fr 1fr');
      } else {
        setGridColumns('1fr');
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return { isMounted, gridColumns };
};

