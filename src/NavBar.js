import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const ref = useRef();
    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        const onscroll = e => {
            console.log(e.target.documentElement.scrollTop);
            setScrollTop(e.target.documentElement.scrollTop);
            console.log('estado: ', scrollTop);
        };


        window.addEventListener('scroll', onscroll);

        console.log(ref.current.scrollTop);
        console.log('en useEffect');

        return () => {
            console.log('removing event listener');
            window.removeEventListener('scroll', onscroll);
        };
    }, [scrollTop]);

    return (
        <div ref={ref} className='header'>          
            <h1>Las Recetas de Gómez</h1>
            
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
          <div className='link'>  <Link  to='/recetas'>Home</Link></div>
        </div >
         
    );
};

export default NavBar;
