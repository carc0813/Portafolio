import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="site-footer text-center p-4">
            <p className="mb-3">
                © 2026 César Restrepo · Software Developer
            </p>

            <div className="footer-socials">

                <a
                    href="https://github.com/carc0813"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de César Restrepo"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                    href="https://www.linkedin.com/in/cesar-andres-restrepo-castrillon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de César Restrepo"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

            </div>
        </footer>
    );
}

export default Footer;