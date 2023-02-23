import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='header'>
            <h1>Las Recetas de Gómez</h1>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
        </div>
         
    );
};

            export default NavBar;
