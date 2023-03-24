import React from 'react';
import Receta from './Receta.js';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Footer from './Footer.jsx';
import './App.css';

function App() {

    return (
        <>
          <NavBar />
            <Routes>
                <Route path='/recetas' element={<Home />} />
                <Route path='/recetas/:id' element={<Receta />} />
            </Routes>
            <Footer className='footer' />
        </>
    );
}

export default App;
