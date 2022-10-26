import { useRef, useState, useEffect } from 'react';

export const useObserver = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = { root: null, rootMargin: '0px', threshold: 0.35 };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting && !isVisible) setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options, isVisible]);

  return { containerRef, isVisible };
};
