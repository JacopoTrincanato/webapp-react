//importo useState, useEffect e useParams
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importo reviewsCard
import ReviewsCard from "../components/ReviewsCard";

//creo il componente FilmDetailsPage
export default function FilmDetailsPage() {

    const { id } = useParams()

    //creo una costante dove salvare le reviews
    /*const reviews = [
        {
            id: 1,
            name: "Grace",
            vote: 5,
            text: "A heartbreaking love story.",
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 2,
            name: "Hank",
            vote: 4,
            text: "Beautiful visuals and a moving plot.",
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 3,
            name: "Ivy",
            vote: 3,
            text: "A bit too melodramatic for my taste.",
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 4,
            name: "Mark",
            vote: 2,
            text: "too melodramatic for my taste.",
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 5,
            name: "Anna",
            vote: 1,
            text: "I didn't like it",
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        }
    ];*/

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