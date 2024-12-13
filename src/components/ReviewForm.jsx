//importo useState e useEffect
import { useState, useEffect } from "react";

//creo il componente ReviewForm
export default function ReviewForm() {

    //creo una costante dove salvare lo username
    const [username, setUsername] = useState('');

    //creo una costante dove salvare la recensione
    const [review, setReview] = useState('');

    //eseguo il return
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form>

                            {/*input per lo username */}
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Inserisci lo username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            {/*input per la recensione */}
                            <div className="mb3">
                                <label htmlFor="review">Review</label>
                                <textarea name="review" id="review" placeholder="Inserisci la recensione" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};