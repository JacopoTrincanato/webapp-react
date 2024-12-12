//creo il componente Banner
export default function Banner({ title, subtitle, leadtext }) {

    //eseguo il return
    return (
        <div className="banner py-4">
            <div className="container">
                <h1>{title}</h1>
                <h3 className="text-muted fst-italic">{subtitle}</h3>
                <p className="lead">
                    {leadtext}
                </p>
            </div>
        </div>
    )
}