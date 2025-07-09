import { useState, useRef, useMemo, useCallback } from 'react'
// import responseMovies from '../mocks/api_result_example.json'
import { searchMovies } from '../services/movies'

// una mala manera de hacerlo #ref1
//let previousQuery = ''

// Lo hemos separado en un custom hook para que sea más fácil de reutilizar y mantener y si en el futuro queremos cambiar la forma en que obtenemos las películas, solo tendremos que cambiarlo aquí.
export const useMovies = ({query, sort}) => {
    // los hooks no se vuelven a rendirizar
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(query) // Usamos useRef para guardar el valor de la búsqueda anterior y evitar hacer una nueva búsqueda si el valor no ha cambiado

    // pero todas las demas funciones del hook se vuelven a renderizar cada vez que cambia el estado del componente

    // const getMovies = useMemo(() => {
    //         return async ({query}) => {
    //             // if (query === previousQuery) return // Si la búsqueda no ha cambiado, no hacemos nada #ref1
    //             if (query === previousSearch?.current) return // Si la búsqueda no ha cambiado, no hacemos nada
    //             //previousQuery = query // Actualizamos el valor de la búsqueda anterior #ref1. Funcionaría pero está mal porque esta variable se va  compartiendo entre todas las instancias del hook y no es lo que queremos.
    //             previousSearch.current = query // Actualizamos el valor de la búsqueda anterior
    //             try {
    //                 setLoading(true) // Opcional: podemos manejar un estado de carga si queremos mostrar un spinner o algo similar
    //                 const newMovies = await searchMovies({query})
    //                 setMovies(newMovies)            
    //             } catch (error) {            
    //                 setError(error.message) // Manejo de errores, podemos mostrar un mensaje de error en la UI
    //                 setMovies([]) // En caso de error, podemos limpiar el estado o manejarlo de otra manera
    //             } 
    //             // esto se va a tanto en el try como en el catch, para asegurarnos de que siempre se limpie el estado de carga
    //             finally {
    //                 setLoading(false) // Siempre debemos limpiar el estado de carga al final
    //             }
    //     }
    // }, []) // Solo se crea una vez la función al pasarle el query por parametro, si sobretodo realmente a tener un problema de rendimiento.

    // useCallback es exactamente igual que useMemo, pero en vez de memorizar el resultado de una función, memoriza la función en sí. 
    // Es decir, para cualquier cosa, usar useMemo y para funciones, usar useCallback.
    const getMovies = useCallback(async ({query}) => {
            // if (query === previousQuery) return // Si la búsqueda no ha cambiado, no hacemos nada #ref1
            if (query === previousSearch?.current) return // Si la búsqueda no ha cambiado, no hacemos nada
            //previousQuery = query // Actualizamos el valor de la búsqueda anterior #ref1. Funcionaría pero está mal porque esta variable se va  compartiendo entre todas las instancias del hook y no es lo que queremos.
            previousSearch.current = query // Actualizamos el valor de la búsqueda anterior
            try {
                setLoading(true) // Opcional: podemos manejar un estado de carga si queremos mostrar un spinner o algo similar
                const newMovies = await searchMovies({query})
                setMovies(newMovies)            
            } catch (error) {            
                setError(error.message) // Manejo de errores, podemos mostrar un mensaje de error en la UI
                setMovies([]) // En caso de error, podemos limpiar el estado o manejarlo de otra manera
            } 
            // esto se va a tanto en el try como en el catch, para asegurarnos de que siempre se limpie el estado de carga
            finally {
                setLoading(false) // Siempre debemos limpiar el estado de carga al final
            }
        }, []) // Solo se crea una vez la función al pasarle el query por parametro, si sobretodo realmente a tener un problema de rendimiento.    
    

    // si no se utiliza el localcompare, el orden de las películas no se garantiza por los acentos y otros caracteres especiales
    // const sortedMovies = sort 
    // ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
    // : movies

    // el useMemo es un hook que nos permite memorizar el resultado de una función y evitar que se vuelva a calcular si los valores de las dependencias no han cambiado.
    // No se debe utilizar en todos los sitios, habría que estudiar si realemnte jhay un problema de rendimiento o no.

    const sortedMovies = useMemo(() => {
        //console.log("render memo sorted movies")

        return sort 
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
        : movies    
    }, [sort, movies])
    // Cuando cambie el sort o las movies, se volverá a calcular el valor de sortedMovies

    
    

    return { movies : sortedMovies, loading, getMovies}
}