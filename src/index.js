import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  {/* <App /> */}
    <Routes>
      <Route path='/' element={(<App/>)}/>
      <Route path='/Login' element={('Login')} />
      <Route path='/Header' element={(<Header/>)} />
      <Route path='/Home' element={('Home')} />
      <Route path='/Checkout' element={('Checkout')} />
      <Route path='/Contact' element={('Contact')} />
      <Route path='/Product' element={('Product')} />
      <Route path='/Login' element={('Login')} />
      {/* <h1>Armaa</h1> */}
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
