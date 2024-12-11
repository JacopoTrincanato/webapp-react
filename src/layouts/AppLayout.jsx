//importo Outlet da react-router-dom
import { Outlet } from "react-router-dom";

//importo AppHeader
import AppHeader from "../components/AppHeader";

//importo AppFooter
import AppFooter from "../components/AppFooter";

//creo il componente AppLayout
export default function AppLayout() {

    //eseguo il return
    return (
        <>
            <AppHeader />

            <main className="py-4">
                <Outlet />
            </main>

            <AppFooter />
        </>
    )
}