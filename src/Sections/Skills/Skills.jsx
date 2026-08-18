import skills from "../../Sections/Skills/data/skills";

function Skills() {

    return (
        <section id="skills" className="py-5">

            <div className="container">

                <h2 className="mb-4">
                    Skills
                </h2>

                <div className="row">

                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className="col-md-4 mb-3"
                        >

                            <div className="card shadow h-100">

                                <div className="card-body">

                                    <h5>
                                        {skill.nombre}
                                    </h5>

                                    <p>
                                        {skill.nivel}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;