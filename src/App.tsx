import { ChangeEvent, useState } from 'react'
import Datos from './components/Datos'
import { IDatos } from './types/IDatos'
import SumaBotones from './components/SumaBotones';

function App () {
  
  const usuarios: IDatos[] = [  // Creamos un array (lista) de nombre Usuarios de tipo IDatos (este concepto de Typescript es parecido a cuando le asignamos el tipo String a una variable nombre), por lo que cada elemento de este Array tendra las props definidas en la interfaz IDatos ()
    {id: 1, nombre: "Patricio", apellido: "Pérez", telefono: "2615561907", email: "patricioperejudo@gmail.com", disponible: true},
    {id: 2, nombre: "Carlitos", apellido: "Ruiz", telefono: "2615589212", email: "carlitos32@gmail.com", disponible: true},
    {id: 3, nombre: "Pepe", apellido: "Pepitus", telefono: "2615571956", email: "pepito42@gmail.com", disponible: false},
    {id: 4, nombre: "Tomas", apellido: "Ferente", telefono: "2617895023", email: "tomasfered@gmail.com", disponible: false}

  ]
  /*  const usuariosFiltrados = usuarios.filter((usuario: IDatos) =>  // Basicamente creamos una "lista filtrada" agarrando la array de arriba con .filter (lo de usuario: IDatos lo explico en la .map de abajo) 
    usuario.disponible === true && usuario.nombre === "Patricio"  // Aca metemos las condiciones de filtrado, que el valor booleano disponible sea true y que el valor nombre sea igual a Patricio (para meter mas condiciones utilizamos el operador &&)
  )  */
    const [filtro, setFiltro] = useState<String>("")
    const [usuariosFiltrados, setUsuariosFiltrados] = useState<IDatos[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const valores = e.target.value

      const datosFiltrados = usuarios.filter((usuario: IDatos) =>
        usuario.nombre.toLowerCase().includes(valores.toLowerCase())
    )
      setUsuariosFiltrados(datosFiltrados)
      setFiltro(valores)
    }
    return (
      <>
      <SumaBotones />  {/* Retornamos la componente de SumaBotones */}

      <input type="text" onChange={handleChange} />
      <h1>{filtro}</h1>

      {usuariosFiltrados.map((usuario: IDatos) =>   // La funcion map basicamente va a a recorrer cada elemento del array y le aplicara a cada uno lo que se muestra en la funcion flecha (basicamente, le va a pasar a la componente Datos todos los valores de las props de cada elemento del array). Con (usuario: IDatos) le estamos diciendo le damos el alias "usuario" a cada elemento del array (puede ser cualquiera), ademas de darle el tipo IDatos para recibir las props de esta interfaz.
        <Datos
        key = {usuario.id} // Creamos la prop id solamente para este momento. La designamos como key, de manera que ayudara a actualizar mas rapidos las modificaciones 
        id={usuario.id}  
        nombre = {usuario.nombre}  // Como vemos, con el alias vamos accediendo a cada propiedad y ese valor se lo vamos pasando a la componente
        apellido = {usuario.apellido}
        telefono = {usuario.telefono}
        email = {usuario.email}
        disponible = {usuario.disponible}
        />  // Esta funcion se va a repetir en funcion de cuantos elementos haya en el array (si hay 4, esta funcion se ejecutara 4 veces).

      )}
      </>
    )
}

export default App

