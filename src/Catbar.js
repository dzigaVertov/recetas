import React from 'react';
import Category from './Category.js';


const Catbar = ({ filtrar }) => {
    return (
        <div className='catbar'>
            <Category />
            <Category />
            <Category />
            <Category />
            <input type='text' onChange={filtrar}></input>
        </div>
    );
};

export default Catbar;
