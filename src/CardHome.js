import React from 'react';
import { Card } from 'react-bootstrap';
import gato from './assets/cute-cat-photos-1593441022.jpg';

const CardHome = (props) => {
    return (
        <>
          <div className='fotoCardHome'>
            <img src={gato}></img>
            <p>prueba</p>
          </div>
          <div className='textoCardHome'>
          </div>          
        </>
    );
};

export default CardHome;
