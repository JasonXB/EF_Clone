import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScreen = (screenWidth: number) => {
    if(screenWidth >= 1700){
        return 'xl'
    } else if(screenWidth >= 1200){
        return 'lg'
    } else if(screenWidth >= 1060){
        return 'md'
    } else if(screenWidth >= 768){
        return 'sm'
    } else if(screenWidth >= 620){
        return 'ss'
    } else if(screenWidth >= 480){
        return 'xs'
    } else {
        return 'xs'
    }
  }

  return getScreen(windowDimensions.width);
}