import React, { useEffect, useState } from 'react';
import Category from './Category.js';


const Catbar = ({ filtrar }) => {

    const [scrollTop, setScrollTop] = useState(0);

    const scrolledCatBar = {
        marginTop: '4rem',
        transition: 'margin-top 1s',
    };

    const scrolledCategories = {
        width: '2rem',
        transition: 'width 1s',
    };

    useEffect(()=> {
        const onscroll = e => {
            setScrollTop(e.target.scrollTop);
        };
        const sc = document.querySelector('#root');
        sc.addEventListener('scroll', onscroll);

        return () => {
            sc.removeEventListener('scroll', onscroll);
        };
    }, [scrollTop]);
    
    return (
        <div className='catbar' style={scrollTop > 0 ? scrolledCatBar : {}} >
            <Category style={scrollTop > 0 ? scrolledCategories : {}} />
            <Category />
            <Category />
            <Category />
            <input type='text' onChange={filtrar}></input>
        </div>
    );
};

export default Catbar;
