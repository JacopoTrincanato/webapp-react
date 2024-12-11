import { Link } from "react-router-dom";
import FilmDetails from "./FilmDetails";

//creo il componente FilmCard
export default function FilmCard({ movie }) {

    //eseguo il return
    return (
        <>
            <div className="film card mt-4">
                <img src={movie.image} alt="" />
                <div className="card-body">
                    <FilmDetails movie={movie} />
                    <Link to={`/movies/${movie.id}`} className="btn btn-dark">Visualizza il film</Link>
                </div>
            </div>
        </>
    )
}