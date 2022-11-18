import { useEffect, useState } from 'react';

export const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    mediaQuery.addEventListener('change', () =>
      handleMediaQueryChange(mediaQuery)
    );
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', () =>
        handleMediaQueryChange(mediaQuery)
      );
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: MediaQueryList) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return isSmallScreen;
};
