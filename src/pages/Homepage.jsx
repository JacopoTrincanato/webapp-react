//importo useState, useEffect e useContext
import { useState, useEffect, useContext } from "react";

//importo il GlobalContext
import GlobalContext from "../contexts/GlobalContext";

//importo FilmCard
import FilmCard from "../components/FilmCard";

//importo Loader
import Loader from "../components/Loader";

//creo il componente Homepage
export default function Homepage() {

    //richiamo i valori dal GlobalContext
    const { loading, setLoading } = useContext(GlobalContext);

    //creo una costante per l'url
    const url = 'http://localhost:3005/movies';

    //creo una costante con useState dove salvare i dati del singolo film
    const [movies, setMovies] = useState([]);

    //effettuo la chiamata AJAX per recuperare i dati del film
    useEffect(() => {

        //imposto setLoading su true
        setLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //aggiorno il valore di movies
                setMovies(data.movies);

                //reimposto setLoading su false
                setLoading(false);

            }).catch(err => console.error(err)
            )
    }, [])

    //eseguo il return
    return (
        <>
            {loading ? <Loader /> : (
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
            )};


        </>
    )
}