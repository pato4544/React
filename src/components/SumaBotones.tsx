import React, { useEffect, useState } from "react"

function SumaBotones() {
      const [numero1, setNumero1] = useState(0) // numero1 es el alias que almacenara al valor "actual" del estado, setNumero1 es el alias de la funcion que actualizara a numero1 y el useState le da un valor inicial de 0 al estado

      const [numero2, setNumero2] = useState(0)

      const [suma, setSuma] = useState(0)  // suma se va a encargar de almacenar la suma de numero1 y numero2 (lo vamos a hacer con el useEffect de abajo)

      useEffect(() => {  // Basicamente, useEffect "reacciona" a cualquier cambio de las "dependencias", ejecutando el codigo que se encuenta por dentro de este
        setSuma(numero1 + numero2);  // Al reaccionar al cambio actualizara el estado suma con la suma entre numero1 y numero2

      }, [numero1, numero2])  // Aca definimos las "dependencias", que van a ser numero1 y numero2 (los estados definidos mas arriba)

  return (
    <>
      <button onClick={() => setNumero1(numero1 + 1)}>  {/* Creamos un boton en el cual, al hacerle click, se le suma 1 a numero1 con setNumero1 */}
          {numero1}   {/* Lo que esta aca es basicamente lo que se va a mostrar en el boton (el valor de numero1) */}
      </button>

      <button onClick={() => setNumero2(numero2 - 1)}>  {/* Lo mismo que arriba, solo que con otro boton, el cual usara el estado de numero2 */}
          {numero2} 
      </button>

      <button>
        Suma de los contadores: {suma}  {/* Aca vamos a mostrar en el boton la frase "Suma de los contadores:" seguido del valor de suma */}
      </button>
    </>
  )
}

export default SumaBotones;