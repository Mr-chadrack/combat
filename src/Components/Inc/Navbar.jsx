import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../image/logo.png"; // garde ton import actuel

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll(); // revérifie à chaque changement de page
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    // Liens blancs seulement sur l'accueil, avant le scroll
    const whiteLinks = isHome && !scrolled;

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top navmenu ${
        whiteLinks ? "navbar-dark py-4" : "navbar-light py-2"
      } ${scrolled ? "shadow-sm" : ""}`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
        >
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="Logo Bon Combat" width="50" className="me-2" />
                    <span className="fw-bold">Bon combat</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Aprops">A propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Article">Article</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Formation">Formation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Librairie">Librairie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}