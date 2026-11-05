import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../image/logo.PNG"; // garde ton import actuel

const NAVY = "#17356b"; // bleu foncé des liens

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

      // Accueil, tout en haut : transparent + liens blancs
    const whiteLinks = isHome && !scrolled;

    // Fond blanc semi-transparent uniquement sur les autres pages
    const hasBackground = !isHome;

      // Accueil : exactement comme avant (0.5). Autres pages : un peu plus opaque
    const bgAlpha = isHome ? 1.85 : 1.85;


    // Couleurs des liens (variables Bootstrap 5.3)
    const colors = whiteLinks
        ? {
            "--bs-navbar-color": "rgba(255, 255, 255, 0.9)",
            "--bs-navbar-hover-color": "#ffc107",
            "--bs-navbar-active-color": "#ffc107",
            "--bs-navbar-brand-color": "#ffffff",
            "--bs-navbar-brand-hover-color": "#ffffff",
        }
        : {
            "--bs-navbar-color": NAVY,
            "--bs-navbar-hover-color": "#0d4fc4",
            "--bs-navbar-active-color": "#0d4fc4",
            "--bs-navbar-brand-color": NAVY,
            "--bs-navbar-brand-hover-color": NAVY,
        };

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top navmenu ${
                whiteLinks ? "navbar-dark py-4" : "navbar-light py-2"
                } ${hasBackground ? "shadow-sm" : ""}`}
            style={{
                ...colors,
                backgroundColor: hasBackground
                  ? `rgba(255, 255, 255, ${bgAlpha})`
                    : "transparent",
                backdropFilter: scrolled ? "blur(50px)" : "none",
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
                            <Link className="nav-link" to="/Contact">Envoyer votre combat</Link>
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