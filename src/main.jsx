
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { CourseProvider } from './context/CourseContext';

ReactDOM.render(
  <React.StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
