//creo il componente ReviewsCard
export default function ReviewsCard({ review }) {

    const vote = review.vote ?? 0;

    //eseguo il return
    return (
        <>
            <div className="review card mb-3">

                <div className="card-body">

                    <span><strong>Nome:</strong> {review.name}</span>

                    <div className="vote mt-3" >

                        {/*stampo le stelline piene */}
                        <strong>Voto:</strong> {vote && Array.from({ length: vote }).map((index) => <span key={`filled-${index}`} className="text-warning"><i className="bi bi-star-fill"></i></span>)}

                        {/*stampo le stelline vuote*/}
                        {vote && Array.from({ length: 5 - vote }).map((index) => <span key={`empty-${index}`} className="text-warning"><i className="bi bi-star"></i></span>)}

                    </div>

                    <p className="mt-3">{review.text}</p>

                </div>
            </div>
        </>
    )
}