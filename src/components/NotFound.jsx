import { Link } from "react-router-dom";

//creo il componente NotFound
export default function NotFound() {

    //eseguo il return
    return (
        <>

            <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">

                <img src="../public/404.webp" className="w-50" alt="" />
                <h1 className="text-center mt-5">Error 404! Not Found</h1>

                <Link to="/" className="btn btn-warning mt-4"> <i className="bi bi-arrow-left"></i>Torna alla Homepage</Link>

            </div>
        </>

    )


}