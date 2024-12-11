//creo il componente Homepage
export default function Homepage() {

    //creo una costante dove salvare la lista dei film
    const movies = [
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            genre: "Science Fiction",
            release_year: 2010,
            abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
            image: null,
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 2,
            title: "The Godfather",
            director: "Francis Ford Coppola",
            genre: "Crime",
            release_year: 1972,
            abstract: "The story of a powerful Italian-American crime family and their struggles.",
            image: null,
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 3,
            title: "Titanic",
            director: "James Cameron",
            genre: "Romance",
            release_year: 1997,
            abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
            image: null,
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 4,
            title: "The Matrix",
            director: "The Wachowskis",
            genre: "Action",
            release_year: 1999,
            abstract: "A hacker discovers the truth about his reality and his role in the war against its controllers.",
            image: null,
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        },
        {
            id: 5,
            title: "Interstellar",
            director: "Christopher Nolan",
            genre: "Science Fiction",
            release_year: 2014,
            abstract: "A team of explorers travels through a wormhole in space to save humanity.",
            image: null,
            created_at: "2024-11-29T10:40:13.000Z",
            updated_at: "2024-11-29T10:40:13.000Z"
        }
    ];

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        <div className="card">
                            <img src="image" alt="" />
                            <div className="card-body">
                                <h3>title</h3>
                                <p>directed by director</p>
                                <span><strong>genre:</strong>genre</span>
                                <p>abstract</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}