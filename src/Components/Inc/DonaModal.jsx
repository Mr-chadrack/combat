import { useState, useEffect } from "react";


/**
 * Fenêtre « Soutenir la plateforme » : don par mobile money,
 * confirmation facultative sur WhatsApp.
 */
export default function DonateModal({
  open,
  onClose,
  currency = "$US",
  amounts = [5, 10, 20, 50],
  // Un ou plusieurs moyens de paiement
  numbers = [{ operator: "M-Pesa", number: "+243 000 000 000", holder: "Nom du bénéficiaire" }],
  whatsappNumber = "243000000000",
}) {
  const [amount, setAmount] = useState(10);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // Montant final : saisi librement ou choisi dans la liste
  const finalAmount = custom !== "" ? Number(custom) : amount;
  const valid = Number.isFinite(finalAmount) && finalAmount > 0;

  const copy = async (num) => {
    try {
      await navigator.clipboard.writeText(num.replace(/\s/g, ""));
      setCopied(num);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* copie impossible : le numéro reste visible */
    }
  };

  const message = [
    "Bonjour, je viens de faire un don pour soutenir la plateforme.",
    valid && `Montant : ${finalAmount} ${currency}`,
    name && `Nom : ${name}`,
    "Merci pour votre travail !",
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="buy-backdrop" onClick={onClose}>
      <div
        className="buy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="buy-close" onClick={onClose} aria-label="Fermer">
          <i className="bi bi-x-lg" />
        </button>

        <h2 id="donate-title" className="buy-title">Soutenir la plateforme</h2>
        <p className="donate-intro">
          Merci de contribuer à faire vivre ce projet. Choisissez un montant :
        </p>

        {/* Choix du montant */}
        <div className="donate-amounts">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              className={`donate-chip ${custom === "" && amount === a ? "active" : ""}`}
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
            >
              {a} {currency}
            </button>
          ))}
        </div>

        <input
          type="number"
          min="1"
          className="donate-custom"
          placeholder={`Autre montant (${currency})`}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />

        {/* Moyens de paiement */}
        <p className="donate-label">
          <strong>1.</strong> Envoyez votre don à l'un de ces numéros :
        </p>
        {numbers.map((n) => (
          <div className="donate-method" key={n.number}>
            <div>
              <span className="donate-operator">{n.operator}</span>
              <div className="donate-num">{n.number}</div>
              <small>{n.holder}</small>
            </div>
            <button type="button" onClick={() => copy(n.number)}>
              <i className={`bi ${copied === n.number ? "bi-check2" : "bi-copy"}`} />
              {copied === n.number ? "Copié" : "Copier"}
            </button>
          </div>
        ))}

        {/* Confirmation facultative */}
        <p className="donate-label">
          <strong>2.</strong> Facultatif : prévenez-nous sur WhatsApp pour recevoir
          un remerciement.
        </p>
        <input
          type="text"
          className="donate-custom"
          placeholder="Votre nom (facultatif)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`buy-whatsapp ${valid ? "" : "disabled"}`}
          aria-disabled={!valid}
          onClick={(e) => !valid && e.preventDefault()}
        >
          <i className="bi bi-whatsapp" />
          Prévenir sur WhatsApp
        </a>

        <p className="buy-note">Merci pour votre générosité.</p>
      </div>
    </div>
  );
}
