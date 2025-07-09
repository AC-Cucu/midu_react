// useRef te permite crear uina referencia mutable que persiste durante todo el ciclo de vida del componente (un id, un elemento del DOM, cada vez que cambia no renderiza el componente).
// Es decir, no se vuelve a renderizar el componente cuando cambia el valor de la referencia mutable.
//import { useRef } from 'react'


import { Movies } from './components/Movies'
import { useMovies } from './customHooks/useMovies.js'
import { useSearch } from './customHooks/useSearch.js'

import { useState, useCallback } from 'react'

import debounce from 'just-debounce-it'

import './App.css'



function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({query, sort})
 
  // Con el hook useCallback podemos memorizar una función para que no se vuelva a crear cada vez que se renderiza el componente, sino que se reutilice la misma instancia de la función.
  // Esto es útil para evitar que se vuelvan a crear funciones innecesariamente y en este caso conseguir el efecto desado de debounce, que es esperar a que el usuario deje de escribir durante un tiempo determinado antes de ejecutar la función.
  // Sin el useCallback, cada vez que se renderiza el componente, se crea una nueva instancia de la función debouncedGetMovies, lo que hace que el debounce no funcione correctamente.
  const debouncedGetMovies = useCallback(
    debounce (query => { 
      getMovies({query}) 
    }, 300)
    , []
  ) // Usamos debounce para evitar hacer demasiadas peticiones a la API cada vez que el usuario escribe en el input
 

//  const handleClick = (event) => {
//   event.preventDefault()
//   const inputValue = inputRef.current.value;
//   console.log(inputValue);
//  }

 const handleSubmit = (event) => {
  event.preventDefault()
  //console.log({query})
  getMovies({query})
  // const query = data.get('query') // Obtenemos el valor del input con name='query'

  // Mejor hacer esto para recuperar todos los campos del formulario que usar varios useRef por cada input. De esta manera tenemos un objeto con todos los campos del formulario.
  // const fields = Object.fromEntries(new FormData(event.target))
  // console.log(fields.query);
 }


 // De esta manera estamos controlando el valor del input y actualizando el estado del componente cada vez que cambia el valor del input.
 const handleChange = (event) => {
  const newQuery = event.target.value.trim() // Eliminamos los espacios en blanco al principio y al final del input
  if (newQuery === '') return // Si el input está vacío, no hacemos nada

  setQuery(newQuery)

  // Esto funciona pero hay que añadir un debounce para evitar hacer demasiadas peticiones a la API cada vez que el usuario escribe en el input.
  //getMovies({query: newQuery}) // Llamamos a la función getMovies para buscar las películas cada vez que el usuario escribe en el input


  debouncedGetMovies(newQuery) // Llamamos a la función debouncedGetMovies para buscar las películas cada vez que el usuario escribe en el input

  console.log(newQuery);
 }

 const handleSort = () => {
  setSort(!sort)
 }



  return (
    <div className='page'>
        <header>
          <h1>Buscador de películas</h1>
          <form className='form' onSubmit={handleSubmit}>
              {/* el useRef se usa para acceder a los valores de los inpunts y que mantiene el valor del input en el DOM, pero no es necesario usarlo si estamos controlando el valor del input con el estado del componente. */}
              {/* <input ref={inputRef} type='text' placeholder='Avengers, Matrix, Sirat...' /> */}
              <input name='query' onChange={handleChange} value={query}  type='text' style={{border: error ? 'red' : 'transparent'}} placeholder='Avengers, Matrix, Sirat...' />
              {/* <button type='submit' onClick={handleClick} className='form-button'>Buscar</button> */}
              <input type='checkbox' onChange={handleSort} checked={sort} />
              {/* <label htmlFor='sort'>Ordenar por año</label> */}
              <button type='submit' className='form-button'>Buscar</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {/* <p>{query}</p> */}
        </header>
        <main>
          {
            loading ? <p className='loadingMessage'>Cargando...</p> : <Movies movies={movies} />
          }
        </main>
    </div>
  )
}

export default App
