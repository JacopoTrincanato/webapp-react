//importo Outlet da react-router-dom
import { Outlet } from "react-router-dom";

//creo il componente AppLayout
export default function AppLayout() {

    //eseguo il return
    return (
        <>
            <header>
                <h1>Welcome to my website</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                footer
            </footer>
        </>
    )
}