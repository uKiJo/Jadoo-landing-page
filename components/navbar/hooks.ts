import { useEffect, useState } from 'react';
import { usePresence } from 'framer-motion';

export const useSmallScreen = () => {
  // const hu = window.matchMedia('(min-width: 600px)').matches;
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  // const [mediaQuery, setMediaQuery] = useState('');

  const [isPresent, safeToRemove] = usePresence();

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
    // setMediaQuery(mediaQuery.media);
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return isSmallScreen;
};
