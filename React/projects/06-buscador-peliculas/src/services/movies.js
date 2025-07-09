const API_KEY = '4287ad07'
const API_URL = 'https://www.omdbapi.com/'

export const searchMovies = async ({query}) => {
    if (query ===  '') return null
    if (query) {
        // setResponseMovies(movies)
        try {
            const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${query}`)
            const data = await response.json()
            if (data.Response === 'True') {
                //return data
                const movies = data?.Search

                // Es buena practica usar destructuring para extraer las propiedades que necesitamos de los objetos.
                // En este caso, estamos extrayendo las propiedades imdbID, Title, Poster y Year de cada película.  
                // También estamos renombrando las propiedades para que sean más fáciles de usar en el componente.
                return movies?.map(movie => {
                    const { imdbID: id, Title: title, Poster: poster, Year: year } = movie
                    return {
                        id,
                        title,
                        poster: poster === 'N/A' ? 'https://via.placeholder.com/150' : poster,
                        year
                    }
                })
            } else {
                return []
            }
        } catch (error) {
            throw new Error('Error fetching movies:', error)
        }
    }
}