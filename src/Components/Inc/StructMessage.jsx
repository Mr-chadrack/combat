import { useState } from "react";
import {
    BsPerson,
    BsEnvelope,
    BsTelephone,
    BsBuilding,
    BsBook,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";





const SERVICE_ID = "service_9cq0gqe";
const TEMPLATE_ID = "template_107iaxj";
const PUBLIC_KEY = "bV8ohMUNqnROVC13j";



const inputStyle = {
    border: "1px solid #e5e7eb",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    boxShadow: "none",
};
const ACCENT = "#17356b";

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
    // dans le composant :
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Les clés de l'objet `form` doivent correspondre aux {{variables}} du modèle
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, {
                publicKey: PUBLIC_KEY,
            });

            setStatus("sent");
            setForm({
                prenom: "",
                nom: "",
                email: "",
                telephone: "",
                organisation: "",
                sujet: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };
    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    return (
        <section className="py-5">
            <div className="container" style={{ maxWidth: "640px" }}>
                <h3 className="fw-bolder" style={{ color: '#15336b' }}>Contacter-nous</h3>

                <div className="underline mx-auto"></div>
                <p className="text-secondary mb-4">
                    Remplissez le formulaire et notre équipe vous répondra
                    <br />
                    sous 24 heures.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4 ">
                        <Field className="combat-input" label="Prénom" icon={BsPerson} name="prenom" placeholder="Entrez votre prénom" value={form.prenom} onChange={handleChange} required />
                        <Field className="combat-input" label="Nom" icon={BsPerson} name="nom" placeholder="Entrez votre nom" value={form.nom} onChange={handleChange} required />
                        <Field className="combat-input" label="Email" icon={BsEnvelope} name="email" type="email" placeholder="Entrez votre email" value={form.email} onChange={handleChange} required />
                        <Field className="combat-input" label="Téléphone" icon={BsTelephone} name="telephone" type="tel" placeholder="Entrez votre numéro" value={form.telephone} onChange={handleChange} />
                        <Field className="combat-input" label="Organisation" icon={BsBuilding} name="organisation" placeholder="Nom de votre organisation" value={form.organisation} onChange={handleChange} />
                        <Field className="combat-input" label="Sujet" icon={BsBook} name="sujet" placeholder="Entrez le sujet" value={form.sujet} onChange={handleChange} required />

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
                                className="btn btn-navy d-inline-flex align-items-center gap-2"
                                
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                        Envoi...
                                    </>
                                ) : (
                                    <>
                                        Envoyer
                                        <i className="bi bi-send" />
                                    </>
                                )}
                            </button>

                            {status === "sent" && <p className="text-success mt-3">Merci, votre message a bien été envoyé.</p>}
                            {status === "error" && <p className="text-danger mt-3">Une erreur est survenue, veuillez réessayer.</p>}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
