//This is the entrypoint for React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //Imports main React component that wraps everything

//This renders main App component into div with "root" id in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

