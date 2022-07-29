import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './routers'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext'
import { PeopleProvider } from './context/PeopleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <PeopleProvider>
      <Routers />
    </PeopleProvider>
  </AuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
