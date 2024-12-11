//creo il componente FilmCard
export default function FilmCard({ movie }) {

    //eseguo il return
    return (
        <>
            <div className="film card mt-4">
                <img src={movie.image} alt="" />
                <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p><strong>directed by:</strong> {movie.director}</p>
                    <p><strong>genre:</strong> {movie.genre}</p>
                    <p> {movie.abstract}</p>
                </div>
            </div>
        </>
    )
}