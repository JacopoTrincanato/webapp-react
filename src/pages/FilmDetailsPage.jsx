//importo useState, useEffect e useParams
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importo useNavigate
import { useNavigate } from "react-router-dom";

//importo reviewsCard
import ReviewsCard from "../components/ReviewsCard";
import NotFound from "../components/NotFound";
import Banner from "../components/Banner";

//creo il componente FilmDetailsPage
export default function FilmDetailsPage() {

    //creo una costante dove salvare l'id del singolo film
    const { id } = useParams()

    //creo una costante dove utilizzare useNavigate
    const navigate = useNavigate();

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

                navigate(<NotFound />)

            }).catch(err =>
                console.error(err)

            )
    }, [])

    //eseguo il return
    return (
        <>
            <Banner title={movie?.title} subtitle={`Diretto da ${movie?.director}`} leadtext={movie?.abstract} />

            <div className="container">

                <h2 className="mb-4">Recensioni:</h2>

                {movie && movie?.reviews.map((review) =>

                    <ReviewsCard key={review.id} review={review} />

                )}
            </div>

        </>
    )
}