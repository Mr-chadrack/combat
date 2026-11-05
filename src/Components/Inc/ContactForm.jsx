import { useForm, ValidationError } from "@formspree/react";


export default function ContactForm({ onSubmit }) {
  // Remplacez par l'identifiant de votre formulaire Formspree
  const [state, handleSubmit] = useForm("mvkklgaz");


    return (
        <section className="combat-section">
            {/* Bandeau bleu avec le titre */}

            {/* Carte du formulaire, à cheval sur le bandeau */}
            <div className="container">

                {state.succeeded ? (
                         <div className="combat-card combat-success">
                           <i className="bi bi-check-circle-fill" />
                           <h2>Merci !</h2>
                           <p>Votre combat a bien été envoyé.</p>
                         </div>
                       ) : (
                         <form className="combat-card" onSubmit={handleSubmit}>
                           <input
                             id="name"
                             type="text"
                             name="name"
                             className="combat-input"
                             placeholder="Nom"
                             aria-label="Nom"
                             required
                           />
                           <ValidationError
                             prefix="Nom"
                             field="name"
                             errors={state.errors}
                             className="combat-error"
                           />
               
                           <input
                             id="email"
                             type="email"
                             name="email"
                             className="combat-input"
                             placeholder="Email"
                             aria-label="Email"
                             required
                           />
                           <ValidationError
                             prefix="Email"
                             field="email"
                             errors={state.errors}
                             className="combat-error"
                           />
               
                           <textarea
                             id="message"
                             name="message"
                             className="combat-input combat-textarea"
                             placeholder="Écris ton combat"
                             aria-label="Écris ton combat"
                             required
                           />
                           <ValidationError
                             prefix="Message"
                             field="message"
                             errors={state.errors}
                             className="combat-error"
                           />
               
                           <div className="text-center">
                             <button
                               type="submit"
                               className="combat-submit"
                               disabled={state.submitting}
                             >
                               {state.submitting ? "Envoi..." : "Soumettre"}
                             </button>
                           </div>
                         </form>
                       )}
            </div>
        </section>
    );
}