//importo useState
import { useState } from "react";

//creo il componente ReviewForm
export default function ReviewForm({ movie_id }) {

    //creo un oggetto con le proprietà delle review
    const newReview = {
        username: '',
        review: '',
        vote: 0
    };

    //creo una costante dove salvare i dati del form
    const [formData, setFormData] = useState(newReview);

    //creo la funzione handleFormData dove aggiornare i dati del form
    function handleFormData(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    function handleFormSubmit(e) {
        e.preventDefault()

        //creo una costante per l'url
        const url = `http://localhost:3005/movies/${movie_id}/review`;

        //effettuo una chiamata ajax per aggiungere una nuova recensione
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { "Content type": "application.json" }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>

                            {/*input per lo username */}
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Inserisci lo username" className="form-control" value={formData.username} onChange={handleFormData} />
                            </div>

                            {/*input per la recensione */}
                            <div className="mb3">
                                <label htmlFor="review">Review</label>
                                <textarea name="review" id="review" placeholder="Inserisci la recensione" className="form-control" value={formData.review} onChange={handleFormData}></textarea>
                            </div>

                            {/*imput per il voto*/}
                            <div className="rating mb-3 text-warning mt-3">
                                {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star ${n <= formData.vote ? '-fill' : ''} `} onClick={setFormData}></i>)}
                            </div>

                            <button type="submit" className="btn btn-dark">Invia</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};