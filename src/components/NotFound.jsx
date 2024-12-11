import { Link } from "react-router-dom";

export default function NotFound() {

    //eseguo il return
    return (
        <>

            <div className="container m-auto bg-danger">

                <h1 className="text-center">Error 404! Not Found</h1>

                <Link to="/" className="btn btn-warning"> <i className="bi bi-arrow-left"></i> Torna alla Homepage</Link>

            </div>
        </>

    )


}