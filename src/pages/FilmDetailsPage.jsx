//importo useState, useEffect e useContext 
import { useState, useEffect, useContext } from "react";

//importo useNavigate e useParams
import { useNavigate, useParams } from "react-router-dom";

//importo GlobalContext
import GlobalContext from "../contexts/GlobalContext";

//importo reviewsCard
import ReviewsCard from "../components/ReviewsCard";

//importo il Banner
import Banner from "../components/Banner";

//importo ReviewForm
import ReviewForm from "../components/ReviewForm";

//importo Loader
import Loader from "../components/Loader";

//creo il componente FilmDetailsPage
export default function FilmDetailsPage() {

    //creo una costante dove salvare l'id del singolo film
    const { id } = useParams();

    //richiamo i valori dal GlobalContext
    const { loading, setLoading } = useContext(GlobalContext);

    //creo una costante dove utilizzare useNavigate
    const navigate = useNavigate();

    //creo una costante per l'url
    const url = `http://localhost:3005/movies/${id}`;

    //creo una costante con useState dove salvare i dati del singolo film
    const [movie, setMovie] = useState(null);

    //effettuo la chiamata AJAX per recuperare i dati del film
    useEffect(() => {

        //imposto setLoading su true
        setLoading(true);

        fetch(url)
            .then((res) => {
                if (res.status === 404) {
                    navigate("*");
                }
                return res.json()
            })
            .then(data => {
                console.log(data);

                setMovie(data);

                //reimposto il valore di setLoading su false
                setLoading(false);

            }).catch(err => {
                console.error(err)
            }

            )
    }, [])

    //eseguo il return
    return (
        <>

            {loading ? <Loader /> : (

                <>
                    <Banner title={movie?.title} subtitle={`Diretto da ${movie?.director}`} leadtext={movie?.abstract} />

                    <ReviewForm movie_id={id} />

                    <div className="container">

                        <h2 className="mb-4">Recensioni:</h2>

                        {movie && movie?.reviews.map((review) =>

                            <ReviewsCard key={review.id} review={review} />

                        )}
                    </div>
                </>
            )};

        </>
    )
};