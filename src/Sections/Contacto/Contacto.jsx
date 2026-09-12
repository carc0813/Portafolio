import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contacto() {

    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        setEnviando(true);
        setMensaje("");

        try {

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            );

            setMensaje(
                "¡Mensaje enviado correctamente! Gracias por contactarme."
            );

            e.target.reset();

        } catch (error) {

            console.error("Error al enviar el mensaje:", error);

            setMensaje(
                "No se pudo enviar el mensaje. Inténtalo nuevamente."
            );

        } finally {

            setEnviando(false);
        }
    };

    return (
        <section id="contact">

            <div className="container">

                <h2>Contacto</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Nombre"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="Correo electrónico"
                        required
                    />

                    <textarea
                        name="message"
                        className="form-control mb-3"
                        rows="5"
                        placeholder="Mensaje"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={enviando}
                    >
                        {enviando ? "Enviando..." : "Enviar"}
                    </button>

                </form>

                {mensaje && (
                    <div className="alert alert-info mt-3">
                        {mensaje}
                    </div>
                )}

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