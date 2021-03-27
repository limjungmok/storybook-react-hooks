/**
 * React.createContext 
 * - Context 객체를 생성한다.

 * Context.Provider
 * - context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다.
 * 
 * Context.Consumer
 * context 변화를 구독하는 React 컴포넌트입니다. 이 컴포넌트를 사용하면 함수 컴포넌트안에서 context를 구독할 수 있습니다.
 * 
 */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { throttle } from 'lodash';

const getWindowSize = () => {
  const {
    innerWidth: width,
    innerHeight: height,
  } = window;

  return {
    width,
    height,
  };
}

// React.createContext(defaultValue) => {Provider, Consumer}
const ResizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
})

const ResizeProvider = ({ children } : { children: any }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  console.log('?', windowSize);

  const handleResize = () => {
    const { width, height } = getWindowSize();

    setWindowSize({ width, height });
  }

  const throttledResize = throttle(handleResize, 200);

  useEffect(() => {
    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
    }
  }, []);

  return <ResizeContext.Provider value={windowSize}>{children}</ResizeContext.Provider>
}

export default ResizeProvider;
export const useResize = () => useContext(ResizeContext);
