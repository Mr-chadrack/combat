import { useState, useEffect } from "react";


/**
 * Fenêtre d'achat : paiement manuel par M-Pesa + confirmation sur WhatsApp.
 * Aucun serveur nécessaire.
 */
export default function BuyModal({
  open,
  onClose,
  product = "Le Prix du Chemin",
  price = "23,59 $US",
  mpesaNumber = "+243 000 000 000",   // <- votre numéro M-Pesa
  mpesaName = "Nom du bénéficiaire",  // <- nom affiché lors du transfert
  whatsappNumber = "243000000000",    // <- format international, sans + ni espaces
}) {
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [copied, setCopied] = useState(false);

  // Fermer avec la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(mpesaNumber.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* copie impossible : le numéro reste visible */
    }
  };

  // Message pré-rempli pour WhatsApp
  const message = [
    "Bonjour, je viens de payer par M-Pesa.",
    `Produit : ${product}`,
    `Montant : ${price}`,
    name && `Nom : ${name}`,
    reference && `Référence de la transaction : ${reference}`,
    "Je vous envoie la capture du paiement.",
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
        aria-labelledby="buy-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="buy-close" onClick={onClose} aria-label="Fermer">
          <i className="bi bi-x-lg" />
        </button>

        <h2 id="buy-title" className="buy-title">Acheter « {product} »</h2>
        <p className="buy-price">{price}</p>

        <ol className="buy-steps">
          <li>
            <strong>Payez par M-Pesa</strong> le montant ci-dessus au numéro :
            <div className="buy-number">
              <span>{mpesaNumber}</span>
              <button type="button" onClick={copyNumber}>
                <i className={`bi ${copied ? "bi-check2" : "bi-copy"}`} />
                {copied ? "Copié" : "Copier"}
              </button>
            </div>
            <small>Au nom de : {mpesaName}</small>
          </li>

          <li>
            <strong>Confirmez sur WhatsApp</strong> en envoyant la capture du
            paiement.
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Référence de la transaction (facultatif)"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </li>
        </ol>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-whatsapp"
        >
          <i className="bi bi-whatsapp" />
          Confirmer sur WhatsApp
        </a>

        <p className="buy-note">
          Votre commande est validée après vérification du paiement.
        </p>
      </div>
    </div>
  );
}
