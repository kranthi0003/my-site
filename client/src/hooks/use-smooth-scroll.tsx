import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 120; // Further increased offset to account for fixed header
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};
