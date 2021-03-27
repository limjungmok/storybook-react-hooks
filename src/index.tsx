import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ResizeProvider from './hooks/useResize';

ReactDOM.render(
  <ResizeProvider>
    <App />
  </ResizeProvider>,
  document.getElementById('root')
);

