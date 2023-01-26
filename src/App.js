import React, {useState, useEffect} from 'react';
import Receta from './Receta.js';
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    return(
        <>
          <NavBar/>
     
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recetas/:id' element={<Receta />} />
          </Routes>

          <Footer/>
        </>
  )
}

export default App;
