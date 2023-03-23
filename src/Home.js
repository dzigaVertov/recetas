import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Catbar from './Catbar.js';
import CardHome from './CardHome.js';

export default function Home() {



    const recetas_db = {
        mousse_chocolate: {
            nombre: 'Mousse de Chocolate',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        },
        masa_pizza: {
            nombre: 'Masa de Pizza',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        },
        tarta_crema: {
            nombre: 'Tarta de Crema',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        }

    };

    const recetas_entries = Object.entries(recetas_db);

    const [recetas_mostradas, set_recetas_mostradas] = useState(recetas_entries);



    function filtrar(event) {
        const filtro = event.target.value;

        set_recetas_mostradas(recetas_entries.filter(([id, rec]) => rec.nombre.toLowerCase().includes(filtro)));
    }

    return (
        <Container className='main'>
            <Catbar filtrar={filtrar} />

          <div className='listaRecetas'>
            {recetas_mostradas.map(([id, rec]) => <CardHome key={id}><Link to={'/recetas/' + id}>{rec.nombre}</Link></CardHome>)}
          </div>

        </Container>
    );
}

