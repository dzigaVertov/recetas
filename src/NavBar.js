import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const [scrollTop, setScrollTop] = useState(0);


    const scrolledHeader = {
        height: '4rem',
        transition: 'height 1s',

    };

    const scrolledh1 = {
        fontSize: '2rem',
        paddingTop: '0rem',
        transition: 'font-size 1s, padding-top 1s, margin-top 1s',

    };


    const scrolledLink = {
        paddingTop: '0',
        transition: 'padding-top 1s',
    };

    useEffect(() => {
        const onscroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };

        window.addEventListener('scroll', onscroll);

        return () => {
            window.removeEventListener('scroll', onscroll);
        };
    }, [scrollTop]);

    return (
        <div className='header' style={scrollTop > 0 ? scrolledHeader : {}}>
            <h1 style={scrollTop > 0 ? scrolledh1 : {}}><Link to='/recetas'>Las Recetas de Gómez</Link></h1>

            <div className='link' style={scrollTop > 0 ? scrolledLink : {}}>  <Link to='/recetas'>Home</Link></div>
            <div className='link' style={scrollTop > 0 ? scrolledLink : {}}>  <Link to='/recetas'>Contacto</Link></div>
            <div className='link' style={scrollTop > 0 ? scrolledLink : {}}>  <Link to='/recetas'>Home</Link></div>
            <div className='link' style={scrollTop > 0 ? scrolledLink : {}}>  <Link to='/recetas'>Home</Link></div>
        </div >

    );
};

export default NavBar;
