
function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">

                <div className="section-heading">
                    <span className="section-label">
                        CONOCE MI PERFIL
                    </span>

                    <h2>
                        Sobre mi enfoque
                    </h2>
                </div>

                <div className="about-content">
                    <p>
                        Mi enfoque está en el desarrollo Backend con Java
                        y Spring Boot, creando APIs REST e integrando
                        bases de datos relacionales como PostgreSQL y MySQL.
                    </p>

                    <p>
                        También cuento con conocimientos de desarrollo
                        frontend con React y JavaScript, lo que me permite
                        comprender la integración entre las interfaces
                        de usuario y los servicios backend.
                    </p>

                    <p>
                        Me interesa construir software mantenible y seguro,
                        aplicando principios SOLID, Clean Code y separación
                        de responsabilidades, mientras continúo fortaleciendo
                        mis conocimientos en testing y arquitectura de software.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;

