import React from 'react';
import Ingredientes from './Ingredientes.js';
import recetas_db from './Receta_db.js';
import { useParams } from "react-router-dom";
import { Card, Button, Container, Image } from 'react-bootstrap';
import gato from './assets/cute-cat-photos-1593441022.jpg';

export default function Receta() {
    const { id } = useParams();
    const receta = recetas_db[id];


    return (
        <Container className='d-grid gap-3 receta'>
            <Card className='cardReceta'>
                <Card.Body>

                    <Card.Title>{receta.nombre}</Card.Title>
                    <div className='ingredientes'>
                        <div>
                            <Card.Subtitle>Ingredientes</Card.Subtitle>
                            <Card.Text>
                                <Ingredientes receta={receta} />
                            </Card.Text>
                        </div>
                        <Card.Img className='fotoTarjeta' variant='right' src={gato} />
                    </div>
                </Card.Body>
            </Card>

            <Card className='cardReceta'>
                <Card.Body>
                    <Card.Title>Instrucciones</Card.Title>
                    <Card.Text>
                        {receta.instrucciones}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
