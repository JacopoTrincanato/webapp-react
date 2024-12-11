//importo reviewsCard
import ReviewsCard from "../components/ReviewsCard";

//creo il componente FilmDetails
export default function FilmDetails() {

    //come deve essere il film nel dettaglio
    /*{
        "id": 3,
        "title": "Titanic",
        "director": "James Cameron",
        "genre": "Romance",
        "release_year": 1997,
        "abstract": "A romantic story set against the tragic sinking of the RMS Titanic.",
        "image": null,
        "created_at": "2024-11-29T10:40:13.000Z",
        "updated_at": "2024-11-29T10:40:13.000Z",
        "reviews": [
            {
                "id": 7,
                "movie_id": 3,
                "name": "Grace",
                "vote": 5,
                "text": "A heartbreaking love story.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 8,
                "movie_id": 3,
                "name": "Hank",
                "vote": 4,
                "text": "Beautiful visuals and a moving plot.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 9,
                "movie_id": 3,
                "name": "Ivy",
                "vote": 3,
                "text": "A bit too melodramatic for my taste.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            }
        ]
    }*/

    //creo una costante dove salvare le reviews
    const reviews = [
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
    ];

    //eseguo il return
    return (
        <>
            <div className="container">
                {reviews.map((review) =>

                    <ReviewsCard review={review} />

                )}
            </div>

        </>
    )
}