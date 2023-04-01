import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import gato from './assets/cute-cat-photos-1593441022.jpg';
import './CardReceta.css';

const CardReceta = (props) => {
    return (
        <div className='card-receta'>
            <Image rounded fluid src={gato} className='card-imagen' />
            <Card className='card-texto'>
                <Card.Title>Título</Card.Title>
                <Card.Body>
                    <Card.Text> Acá iría una breve descripción de la receta.  Algunos comentarios</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardReceta;
