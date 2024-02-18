import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';


function App() {<div className=""></div>
  return (
    
    <>
    <Routes>
    
      <Route exact path='/' Component={Home}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/service' Component={Service}/>
      <Route exact path='/contact' Component={Contact}/>
      
      
      </Routes>   
     
     
     </>
  );
}

export default App;
