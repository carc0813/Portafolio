
import foto from "../../assets/imag/perfil.png";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* PRESENTACIÓN */}
                    <div className="col-lg-7 order-2 order-lg-1">
                        <span className="hero-label">
                            DESARROLLADOR DE SOFTWARE · COLOMBIA
                        </span>

                        <h1 className="hero-title mt-4">
                            Desarrollo soluciones
                            <br />

                            <span className="text-accent">
                                digitales modernas.
                            </span>
                        </h1>

                        <p className="hero-description">
                            Soy César Restrepo, desarrollador Full Stack
                            Junior con enfoque en Backend. Trabajo con Java,
                            Spring Boot y tecnologías web para construir
                            aplicaciones funcionales, seguras y mantenibles.
                        </p>

                        <div className="hero-technologies">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>React</span>
                            <span>PostgreSQL</span>
                        </div>

                        <div className="hero-actions mt-4">
                            <a
                                href="#projects"
                                className="btn btn-primary-custom"
                            >
                                Ver proyectos
                                <span aria-hidden="true"> ↗</span>
                            </a>

                            <a
                                href="#contact"
                                className="btn btn-secondary-custom"
                            >
                                Contactarme
                            </a>
                        </div>
                    </div>

                    {/* FOTOGRAFÍA */}
                    <div className="col-lg-5 order-1 order-lg-2 text-center">
                        <div className="hero-image-container">
                            <div className="hero-image-glow"></div>

                            <img
                                src={foto}
                                className="hero-image"
                                alt="César Restrepo, desarrollador de software"
                            />

                            <div className="hero-floating-card">
                                <span className="status-dot"></span>
                                <span>En constante aprendizaje</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
