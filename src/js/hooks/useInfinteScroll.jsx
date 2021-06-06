import { useState, useEffect } from 'react';

const useInfinteScroll = ({ root = null, onIntersect, threshold = 0.5, rootMargin = '0px' }) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, threshold, onIntersect]);

  return [setTarget];
};

export default useInfinteScroll;
