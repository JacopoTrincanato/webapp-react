//importo ldrs
import 'ldrs/ring'

//creo il componente Loader
export default function Loader() {

    //eseguo il return
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <l-ring size="60" color="coral"></l-ring>
        </div>
    )
}