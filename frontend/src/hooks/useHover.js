import { useRef, useState, useEffect } from 'react';

export default function useHover(IN_DELAY_TIME = 0, OUT_DELAY_TIME = 0) {
  //! USE-STATE
  const [value, setValue] = useState(false);

  //! USE-REF
  const ref = useRef(null);

  //! TIMEOUT HOVOR EFFECT
  let inHovorEffect = null;

  const handleMouseOver = () => {
    if (ref.current) ref.current.style.zIndex = '985';
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
      if (ref.current) ref.current.style.zIndex = 'auto';
    }, 200);
    return () => clearTimeout(delaySetIndex);
  };

  //! remove hover state *browser bug see on github
  useEffect(() => {
    if (value) {
      let interval = setInterval(() => {
        if (value && ref.current && ref.current.matches(':hover') === false) {
          setValue(false);
        }
      }, 200);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

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
