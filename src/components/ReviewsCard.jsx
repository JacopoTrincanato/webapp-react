//creo il componente ReviewsCard
export default function ReviewsCard({ review }) {

    //eseguo il return
    return (
        <>
            <div className="review card mb-3">

                <div className="card-body">

                    <span><strong>Nome:</strong> {review.name}</span>

                    <div className="vote mt-3" >

                        {/*stampo le stelline piene */}
                        <strong>Voto:</strong> {review.vote && Array.from({ length: review.vote }).map((i) => <span key={i} className="text-warning"><i className="bi bi-star-fill"></i></span>)}

                        {/*stampo le stelline vuote*/}
                        {review.vote && Array.from({ length: 5 - review.vote }).map((i) => <span key={i} className="text-warning"><i className="bi bi-star"></i></span>)}

                    </div>

                    <p className="mt-3">{review.text}</p>

                </div>
            </div>
        </>
    )
}