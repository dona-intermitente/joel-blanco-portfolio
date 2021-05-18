import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/reset.css';
import 'styles/variables.css';
import App from 'components/App';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
