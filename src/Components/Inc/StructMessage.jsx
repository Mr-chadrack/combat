import { useState } from "react";
import {
    BsPerson,
    BsEnvelope,
    BsTelephone,
    BsBuilding,
    BsBook,
} from "react-icons/bs";

const inputStyle = {
    border: "1px solid #e5e7eb",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    boxShadow: "none",
};
const ACCENT = "#0000FF";

function Field({ label, icon: Icon, name, type = "text", placeholder, value, onChange, required }) {
    return (
        <div className="col-md-6">
            <label htmlFor={name} className="form-label fw-medium">
                {label}
            </label>
            <div className="input-group">
                <span
                    className="input-group-text bg-transparent border-end-0 text-secondary"
                    style={{ ...inputStyle, borderRight: "none", borderRadius: "10px 0 0 10px" }}
                >
                    <Icon size={18} color={ACCENT} />
                </span>
                <input
                    id={name}
                    name={name}
                    type={type}
                    className="form-control border-start-0 bg-transparent "
                    style={{ ...inputStyle, borderLeft: "none", borderRadius: "0 10px 10px 0" }}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </div>
    );
}

export default function Contact() {
    const [form, setForm] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        organisation: "",
        sujet: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message envoyé :", form);
        // Ici : appel à ton API / EmailJS / backend
        setForm({
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
            organisation: "",
            sujet: "",
            message: "",
        });
    };

    return (
        <section className="py-5">
            <div className="container" style={{ maxWidth: "640px" }}>
                <h2 className="fw-semibold mb-3">Contacter-nous</h2>
                <div className="underline mx-auto"></div>
                <p className="text-secondary mb-4">
                    Remplissez le formulaire et notre équipe vous répondra
                    <br />
                    sous 24 heures.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4 ">
                        <Field label="Prénom" icon={BsPerson} name="prenom" placeholder="Entrez votre prénom" value={form.prenom} onChange={handleChange} required />
                        <Field label="Nom" icon={BsPerson} name="nom" placeholder="Entrez votre nom" value={form.nom} onChange={handleChange} required />
                        <Field label="Email" icon={BsEnvelope} name="email" type="email" placeholder="Entrez votre email" value={form.email} onChange={handleChange} required />
                        <Field label="Téléphone" icon={BsTelephone} name="telephone" type="tel" placeholder="Entrez votre numéro" value={form.telephone} onChange={handleChange} />
                        <Field label="Organisation" icon={BsBuilding} name="organisation" placeholder="Nom de votre organisation" value={form.organisation} onChange={handleChange} />
                        <Field label="Sujet" icon={BsBook} name="sujet" placeholder="Entrez le sujet" value={form.sujet} onChange={handleChange} required />

                        <div className="col-12">
                            <label htmlFor="message" className="form-label fw-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="form-control bg-transparent"
                                style={{ ...inputStyle, borderRadius: "12px" }}
                                placeholder="Écrivez ici..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn text-white btn-sm px-3"
                                style={{ backgroundColor: ACCENT }}
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
