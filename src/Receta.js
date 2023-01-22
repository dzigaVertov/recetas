import React from 'react'
import Ingredientes from './Ingredientes.js'
import recetas_db from './Receta_db.js'
import {useParams} from "react-router-dom"

export default function Receta(props) {
  const {id} = useParams();
  const receta = recetas_db[id];
  return (
    <div>
        <h1>{receta.nombre}</h1>
        <div>
            <Ingredientes receta={receta} />
        </div>
        <div>
            {receta.instrucciones}
        </div>
    </div>
  )
}
