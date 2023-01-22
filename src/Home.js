import React, {useState, useEffect} from 'react'
import Receta from './Receta.js'
import {Link} from 'react-router-dom'

export default function Home() {

  

  const recetas_db = {
    mousse_chocolate: {
      nombre: 'Mousse de Chocolate',
      ingredientes : {
        sal : 50,
        harina : 150,
        crema : 300,
        manteca : 50
      },
      instrucciones : "Mezclar todo y ponerlo al horno"
    },
    masa_pizza: {
      nombre: 'Masa de Pizza',
      ingredientes : {
        sal : 50,
        harina : 150,
        crema : 300,
        manteca : 50
      },
      instrucciones : "Mezclar todo y ponerlo al horno"
    },
    tarta_crema: {
      nombre: 'Tarta de Crema',
      ingredientes : {
        sal : 50,
        harina : 150,
        crema : 300,
        manteca : 50
      },
      instrucciones : "Mezclar todo y ponerlo al horno"
    }
    
  }

  const recetas_entries =  Object.entries(recetas_db);
  const recetas_keys = Object.keys(recetas_db);

  const [recetas_mostradas, set_recetas_mostradas] = useState(recetas_entries);
  
  /* const [nombres_recetas, setNombres_recetas] = useState(recetas_entries.forEach(elem => elem.nombre)); */

  function filtrar(event) {
    const filtro = event.target.value;
    const id_nombres = recetas_entries
    set_recetas_mostradas(recetas_entries.filter(([id, rec]) => rec.nombre.toLowerCase().includes(filtro) ));
  }

  return (
    <div >
      <h1>Las Recetas de Gómez</h1>
      <input type='text'  onChange={filtrar}></input>
      <ul>
        {recetas_mostradas.map(([id, rec]) =>  <li key={id}><Link to={'/recetas/' + id}>{rec.nombre}</Link></li>)}
      </ul>
 
    </div>
  );
}
 