import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ImageContextProvider from './Context/ImageContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ImageContextProvider>
    <App />
    </ImageContextProvider>
  </BrowserRouter>
  </React.StrictMode>
);
