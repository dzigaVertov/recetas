import React from 'react'

export default function Ingredientes(props) {
    const ingr = Object.entries(props.receta.ingredientes);
  return (

    <ul>
        {ingr.map((tipo)=> (<li key={tipo[0]}>{tipo[0]}:  {tipo[1]}</li>))}
        </ul>
  )
}
