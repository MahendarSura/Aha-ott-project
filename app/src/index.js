
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importing the global styles (including Tailwind and custom styles)
import App from './App';  // Importing the main App component
import reportWebVitals from './reportWebVitals';  // Importing the Web Vitals reporting tool

// Create the root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside React.StrictMode, which helps identify potential problems in the app
root.render(
  <React.StrictMode>
    <App />  {/* Main AHA OTT App */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
