import React from 'react';
import Ingredientes from './Ingredientes.js';
import recetas_db from './Receta_db.js';
import {useParams} from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap';


export default function Receta(props) {
  const {id} = useParams();
  const receta = recetas_db[id];
  return (
      <Container className='d-grid gap-3'>
      <Card >

        <Card.Body>
          <Card.Img variant='right' src='receta.'/>
            <Card.Title>{receta.nombre}</Card.Title>
            <Card.Subtitle>Ingredientes</Card.Subtitle>
            <Card.Text>
      <Ingredientes receta={receta}/>
            </Card.Text>       
          </Card.Body>
      </Card>

        <Card>
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
