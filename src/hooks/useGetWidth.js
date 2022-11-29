import { useEffect, useState } from 'react';

const useGetWidth = () => {
  const [width, setWidth] = useState(2000);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useGetWidth;
