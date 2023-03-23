import React from 'react';
import Image from 'react-bootstrap/Image';
import gato from './assets/cute-cat-photos-1593441022.jpg';

const Category = (props) => {
    return (

        <div className='cat'>
          <Image className='image' src={gato} roundedCircle fluid />
          <p>Postres</p>
        </div>

    );
};

export default Category;
