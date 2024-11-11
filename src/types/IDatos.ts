export interface IDatos { // Exportamos una interface de nombre IDatos
    id: number
    nombre: string  // Definimos cada prop y su tipo de dato (en este caso, cadena)
    apellido: string 
    telefono: string 
    email?: string  // Parametro opcional
    disponible: boolean  // Esta prop va a ser de tipo true or false
}