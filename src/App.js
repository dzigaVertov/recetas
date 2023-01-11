import React, {useState, useEffect} from 'react';
import './App.css';
import Receta from './Receta.js';

import {Route, Routes} from 'react-router-dom'
import Home from './Home.js';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recetas/:id' element={<Receta receta=':id' />} />
      
    </Routes>
  );
}

export default App;
