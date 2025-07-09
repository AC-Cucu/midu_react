import { useEffect, useState, useRef } from 'react'

export const useSearch = () => {
 // Esto hace que cada vez que cambie el input se esta renderizando el componente App pero aporta mayor control sobre las validaciones
 const [search, setSearch] = useState('')
 //const inputRef = useRef() // Se suela abusar de useRef para acceder a elementos del DOM, como un input, un botón, etc. En este caso, lo usamos para acceder al valor del input cuando se envía el formulario.
 const [error, setError] = useState(null)
 const isFirstInput = useRef(true) // Para evitar que se muestre el error al cargar la página por primera vez

    useEffect(() => {
    if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return // Evitamos que se muestre el error al cargar la página por primera vez
    }

    if (search === '') {
        setError('El campo de búsqueda no puede estar vacío')
        return
    }

    // if (query.length < 3) {
    //   setError('La búsqueda debe tener al menos 3 caracteres')
    //   return
    // }
    setError(null)
    }, [search])

    return {query: search,  setQuery: setSearch, error}
}