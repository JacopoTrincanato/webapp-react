//creo il componente AppFooter
export default function AppFooter() {

    //eseguo il return
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col text-center">
                        <h3>FAQ</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Gestione Account</a></li>
                            <li><a href="#">Informazioni sui Film</a></li>
                        </ul>
                    </div>

                    <div className="col text-center">
                        <h3>CONTATTI</h3>
                        <ul className="list-unstyled">
                            <li><strong className="mr-4">Email:</strong><a href="#">mywebapp@gmail.com</a></li>
                            <li><strong className="mr-4">Numero di telefono:</strong><a href="#">+39 012 345 6789</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3 className="text-center">SOCIALS</h3>
                        <div className="d-flex justify-content-center">
                            <a href="#"><i className="m-2 bi bi-facebook"></i></a>
                            <a href="#"><i className="m-2 bi bi-twitter"></i></a>
                            <a href="#"><i className="m-2 bi bi-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}