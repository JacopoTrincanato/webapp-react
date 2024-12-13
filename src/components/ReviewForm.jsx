//importo useState e useEffect
import { useState, useEffect } from "react";

//creo il componente ReviewForm
export default function ReviewForm() {

    //creo un oggetto con le proprietà delle review
    const newReview = {
        username: '',
        review: '',
        vote: 0
    };

    //creo una costante dove salvare i dati del form
    const [formData, setFormData] = useState(newReview);

    //creo una costante dove salvare lo username
    //const [username, setUsername] = useState('');

    //creo una costante dove salvare la recensione
    //const [review, setReview] = useState('');

    //creo una costante dove aggiungere il proprio voto
    //const [rating, setRating] = useState(0);

    //creo la funzione handleFormData dove aggiornare i dati del form
    function handleFormData(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    function handleFormSubmit(e) {
        e.preventDefault()
    }

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>

                            {/*input per lo username */}
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Inserisci lo username" value={formData.username} onChange={handleFormData} />
                            </div>

                            {/*input per la recensione */}
                            <div className="mb3">
                                <label htmlFor="review">Review</label>
                                <textarea name="review" id="review" placeholder="Inserisci la recensione" value={formData.review} onChange={handleFormData}></textarea>
                            </div>

                            {/*imput per il voto*/}
                            <div className="rating mb-3 text-warning">
                                {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star ${n <= formData.vote ? '-fill' : ''} `} onClick={() => setFormData(n)}></i>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};