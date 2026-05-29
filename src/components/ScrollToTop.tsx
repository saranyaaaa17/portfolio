import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to allow layout to settle when navigating to same page anchors
    const id = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 40);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
