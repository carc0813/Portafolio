function Contacto() {

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("¡Gracias por contactarme! Recibí tu mensaje.");

        e.target.reset();
    };

    return (
        <section id="contact">

            <div className="container">

                <h2>
                    Contacto
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Nombre"
                        required
                    />

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Correo"
                        required
                    />

                    <textarea
                        className="form-control mb-3"
                        rows="5"
                        placeholder="Mensaje"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Enviar
                    </button>

                </form>

                {/* DATOS DE CONTACTO */}

                <div className="mt-4">

                    <p>
                        <strong>Correo:</strong>{" "}
                        carestrepo13@gmail.com
                    </p>

                    <div className="d-flex gap-3">

                        <a
                            href="https://github.com/carc0813"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/cesar-andres-restrepo-castrillon/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contacto;