import React, { FC } from 'react'

export interface IDatos {
    link: string
    nombre: string
    apellido: string
    telefono: string
}

const Datos:FC<IDatos>  = ({apellido, nombre, telefono, link}) => {
  return (
    <div>
        <img src={link} alt={link} />
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <h3>{telefono}</h3>
    </div>
  )
}

export default Datos