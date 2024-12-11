//creo il componente FilmCard
export default function FilmCard() {

    //eseguo il return
    return (
        <>
            <div className="card">
                <img src="image" alt="" />
                <div className="card-body">
                    <h3>title</h3>
                    <p>directed by director</p>
                    <span><strong>genre:</strong>genre</span>
                    <p>abstract</p>
                </div>
            </div>
        </>
    )
}