import { NavLink } from "react-router-dom";

//creo il componente AppHeader
export default function AppHeader() {

    //eseguo il return
    return (
        <header>
            <nav>
                <NavLink to='/'>
                    <strong>My Web App</strong>
                </NavLink>
            </nav>
        </header>
    )
}