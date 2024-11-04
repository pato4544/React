import React, { FC } from 'react'
import { IDatos } from '../types/IDatos'

const Datos:FC<IDatos>  = ({nombre, apellido, celular, imagen, edad, activo}) => {
  return (
    <div>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <h1>{celular}</h1>
        <img src={imagen} alt={imagen} />
        <h1>{edad}</h1>
        <h1>{activo}</h1>
    </div>
  )
}

export default Datos