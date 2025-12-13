import { useState, useEffect } from 'react';

export const useResponsiveGrid = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [gridColumns, setGridColumns] = useState('1fr');

  useEffect(() => {
    setIsMounted(true);
    
    const updateGrid = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setGridColumns('repeat(4, 1fr)');
      } else if (width >= 576) {
        setGridColumns('repeat(2, 1fr)');
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

