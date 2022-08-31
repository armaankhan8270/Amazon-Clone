import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { ContextProvider,  } from './Context/ProductContext';
import { ini } from './Context/reducer';
import Basket from './Components/Basket';
// import reducer, { initialstate } from './Context/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider  ini={ini}>
    <BrowserRouter>
  {/* <App /> */}
    <Routes>
      <Route path='/' element={(<App/>)}/>
      <Route path='/Login' element={('Login')} />
      <Route path='/Signin' element={('Login')} />
      <Route path='/Header' element={(<Header/>)} />
      <Route path='/Home' element={('Home')} />
      <Route path='/Checkout' element={('Checkout')} />
      <Route path='/Contact' element={('Contact')} />
      <Route path='/Product' element={('Product')} />
      <Route path='/Login' element={('Login')} />
      <Route path='/Basket' element={(<Basket/>)} />
      {/* <h1>Armaa</h1> */}
    </Routes>

    </BrowserRouter>
    </ContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
