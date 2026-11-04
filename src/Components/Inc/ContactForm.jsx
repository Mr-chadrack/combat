import { useState } from "react";


export default function ContactForm({ onSubmit }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            // Remplacez par l'envoi réel (EmailJS, Formspree, votre API...)
            if (onSubmit) await onSubmit(form);
            else console.log("Combat envoyé :", form);

            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="combat-section">
            {/* Bandeau bleu avec le titre */}

            {/* Carte du formulaire, à cheval sur le bandeau */}
            <div className="container">
                <form className="combat-card" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="combat-input"
                        placeholder="Nom"
                        aria-label="Nom"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        className="combat-input"
                        placeholder="Email"
                        aria-label="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        className="combat-input combat-textarea"
                        placeholder="Écris ton combat"
                        aria-label="Écris ton combat"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <div className="text-center">
                        <button
                            type="submit"
                            className="combat-submit"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Envoi..." : "Soumettre"}
                        </button>
                    </div>

                    {status === "sent" && (
                        <p className="combat-msg combat-msg-ok">
                            Merci, votre combat a bien été envoyé.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="combat-msg combat-msg-error">
                            Une erreur est survenue, veuillez réessayer.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}