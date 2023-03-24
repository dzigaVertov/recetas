import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import gato from './assets/cute-cat-photos-1593441022.jpg';

const Category = (props) => {
    const [scrollTop, setScrollTop] = useState(0);

    const scrolledCategories = {
        width: '3rem',
        transition: 'width 1s',
    };

    useEffect(() => {
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

        <div className='cat' style={ scrollTop > 0 ? scrolledCategories : {}}>
            <Image className='image' src={gato} roundedCircle fluid />
            <p>Postres</p>
        </div>

    );
};

export default Category;
