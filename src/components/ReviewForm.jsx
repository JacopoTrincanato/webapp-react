//importo useState
import { useState } from "react";

//creo il componente ReviewForm
export default function ReviewForm({ movie_id, success, handleSuccess }) {

    //creo una costante dove con il rating e la funzione per aggiornarlo
    const [rating, setRating] = useState(0)

    //creo un oggetto con le proprietà delle review
    const newReview = {
        name: '',
        text: '',
        vote: rating
    };

    //creo una costante dove salvare i dati del form
    const [formData, setFormData] = useState(newReview);

    //creo una variabile per gestire il messaggio di errore
    const [error, setError] = useState(null)

    //creo la funzione handleFormData dove aggiornare i dati del form
    function handleFormData(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    function handleFormSubmit(e) {
        e.preventDefault()

        //validazione dati
        if (formData.name.length < 2) {
            setError('Il nome deve avere almeno 2 caratteri!');
        } else if (formData.text.length < 3) {
            setError('La recensione deve avere almeno 3 caratteri!');
        } else if (rating === 0) {
            setError('Il voto deve essere maggiore di 0');
        } else {

            formData

            //creo una costante per l'url
            const url = `http://localhost:3005/movies/${movie_id}/review`;

            //effettuo una chiamata ajax per aggiungere una nuova recensione
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ ...formData, vote: rating }),
                headers: { "Content-Type": "application/json" }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                }).catch(err =>
                    console.error(err)

                )
        };


    };

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>

                            {/*input per lo username */}
                            <div className="mb-3">
                                <label htmlFor="name" className="mb-2">Username</label>
                                <input type="text" name="name" id="name" placeholder="Inserisci lo username" className="form-control" value={formData.name} onChange={handleFormData} />
                            </div>

                            {/*input per la recensione */}
                            <div className="mb3">
                                <label htmlFor="text" className="mb-2">Review</label>
                                <textarea name="text" id="text" placeholder="Inserisci la recensione" className="form-control" value={formData.text} onChange={handleFormData}></textarea>
                            </div>

                            {/*imput per il voto*/}
                            <div className="rating mb-3 text-warning mt-3">
                                {[1, 2, 3, 4, 5].map(number => <i key={number} className={`bi bi-star${number <= rating ? '-fill' : ''} `} onMouseOver={() => setRating(number)}></i>)}
                            </div>

                            <button type="submit" className="btn btn-dark">Invia</button>

                            {/*se error esiste, allora visualizzalo in pagina*/}
                            {error && <span className="text-danger mx-2">{error}</span>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};