import { useState, useCallback } from 'react';

export default function useToggle(initialToggleState = false) {
  const [toggleState, setToggleState] = useState(initialToggleState);

  const handleToggle = useCallback(() => {
    setToggleState(prevToggleState => !prevToggleState);
  }, []);

  return {
    toggleState, handleToggle
  };
}