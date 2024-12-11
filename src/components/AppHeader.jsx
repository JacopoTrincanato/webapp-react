import { NavLink } from "react-router-dom";

//creo il componente AppHeader
export default function AppHeader() {

    //eseguo il return
    return (
        <header className="bg-primary text-center p-4 shadow">
            <nav>
                <NavLink to='/'>
                    <strong className="text-white">My Web App</strong>
                </NavLink>
            </nav>
        </header>
    )
}