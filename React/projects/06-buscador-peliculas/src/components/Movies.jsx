
// Lo hemos separado por componentes para que sea más fácil de leer y mantener.
const ListOfMovies = ({movies}) => {

    const imdbLink = 'https://www.imdb.com/es/title/'
    return (
        <ul className='results'>
        {
            movies.map((movie) => {
            const {id, title, poster, year} = movie
            return (
                <li className='movie' key={id}>
                <h3 className='movie-title'>{title}</h3>
                <p className='movie-year'>{year}</p>
                <a className='movie-link' href={`${imdbLink}${id}`} target='_blank' rel='noopener noreferrer'>
                    <img className='movie-image' src={poster} alt={title} />
                </a>
                </li>
            )
            })
        }
        </ul>
    )
}

const NoResults = () => {
    return (               
        <div className='no-results'>
            <h2>No se encontraron resultados</h2>
            <p>Intenta con otra búsqueda</p>
        </div>
    )
}

export const Movies = ({movies}) => {
    const hasMovies = movies?.length > 0

    return (
        <section className='movies'>
            {hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />}
        </section>
    )
}