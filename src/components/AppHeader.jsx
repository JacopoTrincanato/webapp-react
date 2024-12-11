import { NavLink } from "react-router-dom";

//creo il componente AppHeader
export default function AppHeader() {

    //eseguo il return
    return (
        <header className="bg-primary text-center p-4 shadow">
            <nav>
                <NavLink to='/'>
                    <h1 className="text-white">My Web App</h1>
                </NavLink>
            </nav>
        </header>
    )
}