import React from 'react';
import { useResize } from './hooks/useResize';

import './App.css';

function App() {
  const { width, height } = useResize();

  console.log('useResize', width, height);
  return (
    <div className="App">
      <header className="App-header">
        ㅁㄴㅇㄹ
      </header>
    </div>
  );
}

export default App;
