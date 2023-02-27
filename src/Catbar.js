import React from 'react';

import './Catbar.css';
import Category from './Category.js';


const Catbar = () => {
    return (
        <div className='catbar'>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          
        </div>
    );
};

export default Catbar;
