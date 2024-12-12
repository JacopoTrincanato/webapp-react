//importo useState, useEffect e useParams
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importo reviewsCard
import ReviewsCard from "../components/ReviewsCard";

//creo il componente FilmDetailsPage
export default function FilmDetailsPage() {

    //creo una costante dove salvare l'id del singolo film
    const { id } = useParams()

    //creo una costante per l'url
    const url = `http://localhost:3005/movies/${id}`;

    //creo una costante con useState dove salvare i dati del singolo film
    const [movie, setMovie] = useState(null);

    //effettuo la chiamata AJAX per recuperare i dati del film
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovie(data)
            })
    }, [])

    //eseguo il return
    return (
        <>
            <div className="container">

                {movie && movie?.reviews.map((review) =>

                    <ReviewsCard review={review} />

                )}
            </div>

        </>
    )
}