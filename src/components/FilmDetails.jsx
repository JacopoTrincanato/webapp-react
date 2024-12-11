//creo il componente FilmDetails
export default function FilmDetails({ movie }) {

    //eseguo il return
    return (
        <>
            <h3>{movie.title}</h3>
            <p><strong>Diretto da:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>Trama:</strong> {movie.abstract}</p>
        </>
    )
}