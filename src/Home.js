import React, {useState, useEffect} from 'react'
import Receta from './Receta.js'
import {Link} from 'react-router-dom'

export default function Home() {

  const recetas = ["Mousse de Chocolate", "Tarta de crema", "Pan de hamburguesas"];

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
    }
    
  }

  const [filtro, setFiltro] = useState('');
  const [nombres_recetas, setNombres_recetas] = useState(recetas);

  function filtrar(event) {
    const filtro = event.target.value;
    setFiltro(filtro);
    setNombres_recetas(recetas.filter(elem => elem.toLowerCase().includes(filtro) ));

  }


  
  return (
    <div >
      <h1>Las Recetas de Gómez</h1>
      <input type='text' value={filtro} onChange={filtrar}></input>
      <ul>
        {nombres_recetas.map(elem =>  <li key={elem}><Link to={'/recetas/' + elem}>{elem}</Link></li>)}
      </ul>
 
    </div>
  );
}
 