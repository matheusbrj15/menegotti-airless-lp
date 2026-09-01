'use client';

import { useEffect, useState } from 'react';

export function useFooterOverlap(footerId = 'site-footer', advanceMargin = 120) {
  const [isFooterNear, setIsFooterNear] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(footerId);
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterNear(entry.isIntersecting),
      { rootMargin: `0px 0px ${advanceMargin}px 0px`, threshold: 0 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [advanceMargin, footerId]);

  return isFooterNear;
}
