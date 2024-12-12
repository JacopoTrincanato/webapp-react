//importo useState e useEffect
import { useState, useEffect } from "react";

//importo FilmCard
import FilmCard from "../components/FilmCard";

//creo il componente Homepage
export default function Homepage() {

    //creo una costante per l'url
    const url = 'http://localhost:3005/movies';

    //creo una costante con useState dove salvare i dati del singolo film
    const [movies, setMovies] = useState([]);

    //effettuo la chiamata AJAX per recuperare i dati del film
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovies(data.movies)
            }).catch(err => console.error(err)
            )
    }, [])

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                    {movies && movies.map((movie) =>
                        <div className="col" key={movie.id}>
                            <FilmCard movie={movie} />
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}