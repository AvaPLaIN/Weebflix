import { useRef, useState, useEffect } from 'react';

export default function useHover() {
  //! CONSTANTS
  const IN_DELAY_TIME = 600;
  const OUT_DELAY_TIME = 100;

  //! USE-STATE
  const [value, setValue] = useState(false);

  //! USE-REF
  const ref = useRef(null);

  //! TIMEOUT HOVOR EFFECT
  let inHovorEffect = null;

  const handleMouseOver = () => {
    ref.current.style.zIndex = '985';
    clearTimeout(inHovorEffect);
    inHovorEffect = setTimeout(() => {
      setValue(true);
    }, IN_DELAY_TIME);
  };

  const handleMouseOut = () => {
    clearTimeout(inHovorEffect);

    inHovorEffect = setTimeout(() => {
      setValue(false);
    }, OUT_DELAY_TIME);
    const delaySetIndex = setTimeout(() => {
      ref.current.style.zIndex = 'auto';
    }, 200);
    return () => clearTimeout(delaySetIndex);
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseenter', handleMouseOver);
        node.addEventListener('mouseleave', handleMouseOut);
        return () => {
          node.removeEventListener('mouseenter', handleMouseOver);
          node.removeEventListener('mouseleave', handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
