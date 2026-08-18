function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            
            <div className="container">

                <a 
                    href="#home" 
                    className="navbar-brand fw-bold"
                >
                    César R.
                </a>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    ☰
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="menu"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a 
                                href="#home" 
                                className="nav-link"
                            >
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                href="#skills" 
                                className="nav-link"
                            >
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                href="#titles" 
                                className="nav-link"
                            >
                                Títulos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                href="#services" 
                                className="nav-link"
                            >
                                Servicios
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                href="#projects" 
                                className="nav-link"
                            >
                                Proyectos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                href="#contact" 
                                className="nav-link"
                            >
                                Contactos
                            </a>
                        </li>

                        <li className="nav-item">
                            <button className="btn btn-link nav-link">
                                🌙
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;