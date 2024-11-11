import React, { FC } from 'react'  // React aparece en amarillo porque abajo no estamos utilizando React.FC solo estoy usando su funcion FC
import { IDatos } from '../types/IDatos'  // Importamos la interfaz IDatos

const Datos: FC <IDatos> = ({id, nombre, apellido, telefono, email, disponible}) => {  // Creamos Datos, una componente funcional (FC) que recibe las props de la interfaz IDatos (<IDatos>), seguido de una desestructuracion de props, para hacer que el codigo sea mas limpio y facil de hacer
  return (
    <> 
    <h1>{id}</h1>
    <h1>{nombre}</h1> 
    <h1>{apellido}</h1>
    <h1>{telefono}</h1>
    <h1>{email}</h1>
    <h1>{disponible}</h1>  {/* Cabe aclarar que mi amigo el booleano no se va a renderizar */}
    </>
  )
}
export default Datos  // Lo exportamos para usarlo en App.tsx