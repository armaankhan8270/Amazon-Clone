import './App.css';
import Header from './Components/Header';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
import { ProductsContext } from './Context/ProductContext';

// import {Header} from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Navbar/>
    <ImageSlider/>
      <h1 className="text-3xl text-center font-bold underline">
    Lets Build Amzon Clone 

    </h1>
   
    </div>
  );
}

export default App;
