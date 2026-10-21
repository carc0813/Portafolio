import emailjs from "@emailjs/browser";
import cv from "../../assets/CV/CV-Cesar-Andres-Restrepo-Generation-Formato-septiembre2026.pdf";
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
        
<section id="contact" className="contact-section">
    <div className="container">

        <div className="section-heading text-center">
            <span className="section-label">
                HABLEMOS
            </span>

            <h2>¿Trabajamos juntos?</h2>

            <p>
                Estoy interesado en nuevas oportunidades profesionales
                y proyectos donde pueda aportar mis conocimientos
                y continuar creciendo como desarrollador.
            </p>
        </div>

        <div className="contact-card">

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="contact-name" className="form-label">
                        Nombre
                    </label>

                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Escribe tu nombre"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contact-email" className="form-label">
                        Correo electrónico
                    </label>

                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="nombre@correo.com"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contact-message" className="form-label">
                        Mensaje
                    </label>

                    <textarea
                        id="contact-message"
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Cuéntame en qué podemos trabajar..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary-custom w-100"
                    disabled={enviando}
                >
                    {enviando ? "Enviando..." : "Enviar mensaje"}
                </button>

            </form>

            {mensaje && (
                <div className="alert alert-info mt-3" role="status">
                    {mensaje}
                </div>
            )}

            <div className="contact-email">
                <span>También puedes escribirme a</span>

                <a href="mailto:carestrepo13@gmail.com">
                    carestrepo13@gmail.com
                </a>
            </div>

        </div>

        <div className="cv-callout">
            <h3>¿Quieres conocer más sobre mi perfil?</h3>

            <p>
                Consulta mi hoja de vida y conoce mi formación
                y experiencia profesional.
            </p>

            <a
                href={cv}
                download="CV_Cesar_Restrepo.pdf"
                className="btn btn-secondary-custom"
            >
                Descargar CV ↓
            </a>
        </div>

    </div>
</section>


    );
}

export default Contacto;