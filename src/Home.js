import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Catbar from './Catbar.js';
import CardHome from './CardHome.js';
import PlatoDia from './PlatoDia.js';

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
        masa_pizza_1: {
            nombre: 'Masa de Pizza',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        },
        masa_pizza_2: {
            nombre: 'Masa de Pizza',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        },
        masa_pizza_3: {
            nombre: 'Masa de Pizza',
            ingredientes: {
                sal: 50,
                harina: 150,
                crema: 300,
                manteca: 50
            },
            instrucciones: "Mezclar todo y ponerlo al horno"
        },
        masa_pizza_4: {
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
        <>
            <Catbar filtrar={filtrar} />
            <Container className='main'>

                <PlatoDia nombre={recetas_mostradas[0][1].nombre} resumen={recetas_mostradas[0][1].instrucciones} />
                <div className='listaRecetas'>
                    {recetas_mostradas.map(([id, rec]) => <Link className='link' key={id} to={'/recetas/' + id}>
                        <CardHome nombre={rec.nombre} resumen={rec.instrucciones} />
                    </Link>)}
                </div>

            </Container>
        </>
    );
}

