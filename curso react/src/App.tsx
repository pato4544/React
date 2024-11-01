import Datos from './components/Datos'
import { IDatos } from './types/IDatos'

function App() {

  const usuarios: IDatos[] = [
    { nombre: "Bruno", apellido: "Mastropieri", telefono: "2615561906", link: "asdasa" },
    { nombre: "Patricio", apellido: "Perez", telefono: "261708908", link: "asadadasdas"}
  ]
  return (
    <>
     {usuarios.map((usuario: IDatos) => (
      <Datos
        apellido={usuario.apellido}
        telefono={usuario.telefono}
        link={usuario.link}
        nombre={usuario.nombre}     
        />
     ))}     
    </>
  )
}

export default App
