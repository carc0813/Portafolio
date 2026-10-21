
import skills from "../../Sections/Skills/data/skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faJava,
    faReact,
    faNodeJs,
    faJs
} from "@fortawesome/free-brands-svg-icons";

import {
    faDatabase,
    faCode
} from "@fortawesome/free-solid-svg-icons";

// Relacionar cada tecnología con su icono
const skillIcons = {
    "Java": faJava,
    "React": faReact,
    "Node.js": faNodeJs,
    "JavaScript": faJs,
    "Spring Boot": faJava,
    "MySQL": faDatabase,
    "PostgreSQL": faDatabase
};

function Skills() {
    return (
        <section id="skills" className="skills-section py-5">
            <div className="container">

                <div className="section-heading text-center mb-5">
                    <span className="section-label">
                        TECNOLOGÍAS
                    </span>

                    <h2 className="mt-3">
                        Mis <span className="text-accent">habilidades</span>
                    </h2>

                    <p className="skills-description">
                        Herramientas y tecnologías que utilizo para
                        construir aplicaciones web y soluciones backend.
                    </p>
                </div>

                <div className="row g-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.nombre}
                            className="col-6 col-md-4 col-lg-3"
                        >
                            <div className="skill-card h-100">

                                <div className="skill-icon">
                                    <FontAwesomeIcon
                                        icon={skillIcons[skill.nombre] || faCode}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h5 className="skill-name">
                                    {skill.nombre}
                                </h5>

                                <span className="skill-level">
                                    {skill.nivel}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;

