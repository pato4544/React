import { ChangeEvent, useState } from 'react'
import Datos from './components/Datos'
import { IDatos } from './types/IDatos'

function App() {

  const usuarios: IDatos[] = [
    { nombre: "Ana", apellido: "García", celular: "98765", imagen: "imagen1.jpg", edad: 28, activo: true },
    { nombre: "Luis", apellido: "Pérez", celular: "54321", imagen: "imagen2.jpg", edad: 34, activo: false },
    { nombre: "Sofía", apellido: "López", celular: "67890", imagen: "imagen3.jpg", edad: 22, activo: true },
    { nombre: "Carlos", apellido: "Fernández", celular: "13579", imagen: "imagen4.jpg", edad: 41, activo: true },
    { nombre: "María", apellido: "Martínez", celular: "24680", imagen: "imagen5.jpg", edad: 30, activo: false },
  ]

  const [filtro, setFiltro] = useState<string>("")

  const [usuariosFiltrados, setUsuariosFiltrados] = useState<IDatos[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const valores = e.target.value;

    // const {values} = e.target;

    const datosFiltrados = usuarios.filter((usuario: IDatos) =>
      usuario.nombre.toLowerCase().includes(valores.toLowerCase())
    )

    setUsuariosFiltrados(datosFiltrados)
  
    setFiltro(valores)
  }


  return (
    <>
      <input type="text" onChange={handleChange} />
      <h1>{filtro}</h1>
      <h1>hola</h1>

      {/* <button onClick={() => setContador(contador + 1)}>
        {contador}
      </button> */}

     {usuariosFiltrados.map((usuario: IDatos) => (
      <Datos
        nombre={usuario.nombre}
        apellido={usuario.apellido}
        celular={usuario.celular}
        imagen={usuario.imagen}
        edad={usuario.edad}
        activo={usuario.activo}     
        />
     ))}     
    </>
  )
}

export default App
