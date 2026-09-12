import { useEffect, useState } from "react";


function Navbar() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top">

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
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="menu"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#titles" className="nav-link">
                                Títulos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                Servicios
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

                        <li className="nav-item">
                            <a
                                href="https://github.com/carc0813"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                            >
                                GitHub
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="https://www.linkedin.com/in/cesar-andres-restrepo-castrillon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-link nav-link"
                                onClick={() => setDarkMode(!darkMode)}
                                aria-label="Cambiar tema"
                            >
                                {darkMode ? "☀️" : "🌙"}
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;