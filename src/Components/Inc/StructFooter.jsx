import { useState } from "react";
import {
    BsShieldCheck,
    BsFacebook,
    BsLinkedin,
    BsInstagram,
    BsTwitter,
    BsArrowRight,
} from "react-icons/bs";

import logo from "../../image/logo.png";

const ACCENT = "#0000FF";

const menuLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/apropos" },
    { label: "Nos missions", href: "/missions" },
    { label: "Formation", href: "/formation" },
    { label: "Contact", href: "/contact" },
];

const rubriqueLinks = [
    { label: "Le bon combat", href: "/le-bon-combat" },
    { label: "La librairie", href: "/librairie" },
    { label: "Soutenir l'œuvre", href: "/soutenir" },
    { label: "Envoyer mon combat", href: "/envoyer-mon-combat" },
];

const socials = [
    { icon: BsFacebook, href: "#", label: "Facebook" },
    { icon: BsLinkedin, href: "#", label: "LinkedIn" },
    { icon: BsInstagram, href: "#", label: "Instagram" },
    { icon: BsTwitter, href: "#", label: "Twitter" },
];

function LinkColumn({ title, links }) {
    return (
        <div className="col-6 col-lg-2">
            <h6 className="fw-semibold mb-4 text-light">{title}</h6>
            <ul className="list-unstyled m-0 d-grid gap-3">
                {links.map((l) => (
                    <li key={l.label}>
                        <a href={l.href} className="text-decoration-none text-light small">
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Inscription newsletter :", email);
        setEmail("");
    };

    return (
        <footer className="border-top py-5" style={{ backgroundColor: "#191c1c" }}>
            <div className="container">
                <div className="row g-5">
                    {/* Marque */}
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-4">
                            <img src={logo} alt="Logo" width={50} />
                            <span className="fw-semibold fs-5 text-light">Le bon combat</span>
                        </div>
                        <p className="text-light small mb-4" style={{ maxWidth: "260px" }}>
                            Une œuvre dédiée à la formation, au soutien et à
                            l'accompagnement de ceux qui mènent le bon combat.
                        </p>
                        <div className="d-flex gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="text-light"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colonnes de liens */}
                    <LinkColumn title="Menu" links={menuLinks} />
                    <LinkColumn title="Rubriques" links={rubriqueLinks} />

                    {/* Newsletter */}
                    <div className="col-12 col-lg-4">
                        <h6 className="fw-semibold mb-4 text-light">Newsletter</h6>
                        <p className="text-light small mb-4">
                            Recevez nos actualités, enseignements et informations sur
                            l'œuvre directement dans votre boîte mail.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="d-flex align-items-center bg-white rounded-pill p-1 shadow-sm border"
                        >
                            <input
                                type="email"
                                className="form-control border-0 shadow-none bg-transparent ps-3 px-3"
                                placeholder="Adresse email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="btn text-white rounded-pill d-inline-flex align-items-center gap-2 btn-sm px-3"
                                style={{ backgroundColor: ACCENT }}
                            >
                                S'abonner <BsArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
