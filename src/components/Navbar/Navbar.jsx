import { useEffect, useState } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">

                {/* LOGO */}
                <a
                    href="#home"
                    className="navbar-brand fw-bold"
                    onClick={closeMenu}
                >
                    César R.
                </a>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    type="button"
                    className="navbar-toggler"
                    onClick={toggleMenu}
                    aria-controls="menu"
                    aria-expanded={menuOpen}
                    aria-label="Abrir menú"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENÚ */}
                <div
                    className={`navbar-collapse ${
                        menuOpen ? "show" : ""
                    }`}
                    id="menu"
                >
                    <ul className="navbar-nav ms-auto">

                        {/* INICIO */}
                        <li className="nav-item">
                            <a
                                href="#home"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Inicio
                            </a>
                        </li>

                        {/* SKILLS */}
                        <li className="nav-item">
                            <a
                                href="#skills"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Skills
                            </a>
                        </li>

                        {/* TÍTULOS */}
                        <li className="nav-item">
                            <a
                                href="#titles"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Títulos
                            </a>
                        </li>

                        {/* SERVICIOS */}
                        <li className="nav-item">
                            <a
                                href="#services"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Servicios
                            </a>
                        </li>

                        {/* PROYECTOS */}
                        <li className="nav-item">
                            <a
                                href="#projects"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Proyectos
                            </a>
                        </li>

                        {/* CONTACTO */}
                        <li className="nav-item">
                            <a
                                href="#contact"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Contacto
                            </a>
                        </li>

                        {/* GITHUB */}
                        <li className="nav-item">
                            <a
                                href="https://github.com/carc0813"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                GitHub
                            </a>
                        </li>

                        {/* LINKEDIN */}
                        <li className="nav-item">
                            <a
                                href="https://www.linkedin.com/in/cesar-andres-restrepo-castrillon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                LinkedIn
                            </a>
                        </li>

                        {/* MODO OSCURO */}
                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-link nav-link theme-button"
                                onClick={toggleDarkMode}
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