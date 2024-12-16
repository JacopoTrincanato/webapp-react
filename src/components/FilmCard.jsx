//importo Link da react-router-dom
import { Link } from "react-router-dom";

//creo il componente FilmCard
export default function FilmCard({ movie }) {

    //eseguo il return
    return (
        <>
            <div className="film card mt-4">
                <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p><strong>Diretto da:</strong> {movie.director}</p>
                    <p><strong>Genere:</strong> {movie.genre}</p>
                    <p><strong>Trama:</strong> {movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-dark">Visualizza il film</Link>
                </div>
            </div>
        </>
    )
}