import React from 'react'
import Ingredientes from './Ingredientes.js'

export default function Receta(props) {
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
  console.log(props.receta);

  return (
    <div>
        <div>
            <Ingredientes receta={recetas_db[props.receta]} />
        </div>
        <div>
            {props.receta.instrucciones}
        </div>
    </div>
  )
}
