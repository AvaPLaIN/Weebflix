//! IMPORT LIBRARIES
import { useRef, useState } from 'react';

export default function useSlider() {
  //! USE-STATE
  const [isListScrolled, setIsListScrolled] = useState(false);

  //! USE-REF
  const ref = useRef(null);

  //! VARS
  let distance;
  let containerWidth;
  let windowWidth;

  //TODO ADD CONSTANS MATH VARS!

  //! SET VARS
  const setVars = () => {
    distance = ref?.current?.getBoundingClientRect().x;
    containerWidth = ref?.current?.getBoundingClientRect().width;
    windowWidth = window?.innerWidth;
  };

  //! CHECK DIRECTION
  const checkDirection = (direction) => {
    if (direction === 'left') {
      if (windowWidth > 1000) {
        distance -= windowWidth / 2;
      } else {
        distance -= 285;
      }
    } else {
      if (windowWidth > 1000) {
        distance += windowWidth / 2;
      } else {
        distance += 185;
      }
    }
  };

  //! CHECK OVERFLOW
  const checkOverflow = () => {
    if (distance >= 0) {
      distance = 0;
    } else if (-distance + windowWidth - 110 >= containerWidth) {
      distance = -(containerWidth - windowWidth + 110);
    }
    if (containerWidth < windowWidth) {
      distance = 0;
    }
  };

  //! CHECK SCROLLED
  const checkScrolled = () => {
    if (distance < 0) {
      setIsListScrolled(true);
    } else {
      setTimeout(() => {
        setIsListScrolled(false);
      }, 900);
    }
  };

  //! TRANSLATE-X CONTAINER
  const translateX = () => {
    ref.current.style.transform = `translateX(${distance}px)`;
  };

  //! CALLBACK FUNCTION
  const moveSlider = (direction) => {
    setVars();
    checkDirection(direction);
    checkOverflow();
    checkScrolled();
    translateX();
  };

  return [isListScrolled, ref, moveSlider];
}
