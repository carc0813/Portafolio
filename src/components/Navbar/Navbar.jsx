

function Navbar(){

    return(

        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">

            <div className="container">

                <a className="navbar-brand fw-bold">
                    César R.
                </a>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu">

                    ☰

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                Sobre mí
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects" className="nav-link">
                                Proyectos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contacto
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    )

}

export default Navbar;