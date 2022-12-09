import { RefObject, useEffect, useState } from 'react';

export const useViewport = (ref: RefObject<HTMLDivElement>) => {
  const [containerHeight, setcontainerHeight] = useState(
    ref.current?.clientHeight
  );
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => {
      console.log('dismount');
      window.removeEventListener('resize', updateDimensions);
    };
  }, [containerHeight, viewport]);

  const updateDimensions = () => {
    setViewport(window.innerWidth);
    if (ref.current) setcontainerHeight(ref.current.clientHeight);
    console.log('update dimension fired!');
    console.log(ref.current);
  };

  return [containerHeight, viewport];
};
