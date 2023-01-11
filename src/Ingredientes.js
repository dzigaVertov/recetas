import React from 'react'

export default function Ingredientes(props) {
    const ingr = Object.entries(props.receta.ingredientes);
  return (

    <ul>
        {ingr.map((tipo)=> (<li>{tipo[0]} queseyo {tipo[1]}</li>))}
        </ul>
  )
}
