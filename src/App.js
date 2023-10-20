import {  Route, Routes, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Blog from './Components/Blog';
import About from './Components/About';
import Book from './Components/Book';
import Signin from './Components/Signin';
import Signup from './Components/Signup';


function App() {

  const location=useLocation();
  const [cab,setCab]=useState(null)
  const navigate = useNavigate();

  const handleclick= (buttonvalue)=>{
    console.log(buttonvalue);
     setCab(buttonvalue);
     navigate('/Book')
    
  }
  useEffect(()=>{
    console.log(cab);
  },[cab])

  return (
    <div className="App bg-[#2E4053]">
      
      
      
     { location.pathname === '/' || location.pathname==='/signup' ? null : <Navbar />}
     
    
      <Routes>  
        <Route path='/' element={<Signin />}/>
        <Route path='/Home' element={<Home cab={cab} handleclick={handleclick}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/Book' element={< Book cab={cab} handleclick={handleclick}/>}/>
      </Routes>
     
     
    </div>
  );
}

export default App;
