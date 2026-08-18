

function Contacto(){

    return(

        <section id="contact">

            <div className="container">

                <h2>

                    Contacto

                </h2>
                 <form>

                    <input
                        className="form-control mb-3"
                        placeholder="Nombre"
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Correo"
                    />

                    <textarea
                        className="form-control mb-3"
                        rows="5"
                        placeholder="Mensaje">

                    </textarea>

                    <button className="btn btn-primary">

                        Enviar

                    </button>

                </form>

            </div>

        </section>

    )

}

export default Contacto;