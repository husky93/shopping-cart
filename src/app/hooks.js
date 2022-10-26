import { useRef, useState, useEffect } from 'react';

export const useObserver = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = { root: null, rootMargin: '0px', threshold: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};
