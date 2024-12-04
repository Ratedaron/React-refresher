import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const cars = ['Ford', 'BMW', 'Audi']

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App cars={cars}/>
  </React.StrictMode>
);

