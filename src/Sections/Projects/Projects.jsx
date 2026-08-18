import projects from "../../data/projects";

function Projects() {
    return (
        <section id="projects" className="py-5">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">
                        Mis proyectos
                    </h2>

                    <p className="text-muted">
                        Algunos de los proyectos que he desarrollado
                        durante mi formación como Full Stack Developer.
                    </p>
                </div>

                <div className="row g-4">

                    {projects.map((project) => (

                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={project.id}
                        >

                            <div className="card h-100 shadow-sm border-0">

                                <img
                                    src={project.imagen}
                                    className="card-img-top"
                                    alt={`Imagen del proyecto ${project.titulo}`}
                                    style={{
                                        height: "220px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body d-flex flex-column">

                                    <h5 className="card-title fw-bold">
                                        {project.titulo}
                                    </h5>

                                    <p className="card-text text-muted">
                                        {project.descripcion}
                                    </p>

                                    {/* Tecnologías */}
                                    {project.tecnologias && (
                                        <div className="mb-3">

                                            {project.tecnologias.map(
                                                (tecnologia, index) => (

                                                    <span
                                                        key={index}
                                                        className="badge bg-secondary me-1 mb-1"
                                                    >
                                                        {tecnologia}
                                                    </span>

                                                )
                                            )}

                                        </div>
                                    )}

                                    {/* Botones */}
                                    <div className="mt-auto d-flex gap-2">

                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                Ver proyecto
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark"
                                            >
                                                GitHub
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;