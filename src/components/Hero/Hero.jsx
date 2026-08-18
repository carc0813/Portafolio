import foto from "../../assets/imag/perfil.png";

function Hero() {

    return (
        <section id="home" className="hero">

            <div className="container">

                <div className="text-center">

                    <h1 className="hero-title">
                        Hola, soy César
                        <br />
                        Full Stack Developer
                        <br />
                        de Colombia
                    </h1>

                </div>


                <div className="row align-items-center mt-5">

                    {/* BIOGRAFÍA */}

                    <div className="col-lg-4">

                        <span className="hero-label">
                            BIOGRAFÍA
                        </span>

                        <p>
                            ¡Hola! Soy César, desarrollador
                            Full Stack. Transformo ideas en
                            experiencias web funcionales,
                            modernas y escalables.
                        </p>

                        <p>
                            Actualmente estoy enfocado en
                            el desarrollo Backend y en la
                            construcción de aplicaciones
                            web profesionales.
                        </p>

                    </div>


                    {/* FOTO */}

                    <div className="col-lg-4 text-center">

                        <img
                            src={foto}
                            className="hero-image rounded-circle"
                            alt="César Restrepo"
                        />

                    </div>


                    {/* EXPERIENCIA */}

                    <div className="col-lg-4 text-center">

                        <span className="hero-label">
                            AÑOS DE EXPERIENCIA
                        </span>

                        <h2 className="experience-number">
                            02+
                        </h2>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;