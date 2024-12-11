import { Link } from "react-router-dom";

//creo il componente NotFound
export default function NotFound() {

    //eseguo il return
    return (
        <>

            <div className="container d-flex justify-content-evenly align-items-center m-auto">

                <div className="min-vh-100">
                    <h1 className="text-center">Error 404! Not Found</h1>

                    <Link to="/" className="btn btn-warning"> <i className="bi bi-arrow-left"></i> Torna alla Homepage</Link>
                </div>


            </div>
        </>

    )


}