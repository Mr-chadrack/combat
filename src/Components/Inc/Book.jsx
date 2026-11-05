
/**
 * Section de présentation d'un livre.
 * Tout se change via les props ci-dessous (valeurs par défaut incluses).
 */
export default function BookHero({
  intro ,
  title ,
  quote ,
  subtitle,
  buyText,
  buyLink = "#",
  onBuy,                 // facultatif : fonction appelée au clic (ouvre la fenêtre d'achat)
  programText = "Voir le programme",
  programLink = "#",
  availability,
  price ,
  cover , // remplacez par votre couverture
}) {
  return (
    <section className="book-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* TEXTE à gauche */}
          <div className="col-lg-5">
            <h1 className="book-title">
              {intro} <span className="book-title-accent">{title}</span>{" "}
              {quote}
            </h1>

            <p className="book-subtitle">{subtitle}</p>

            <div className="d-flex flex-wrap gap-3 mb-4">

                {onBuy ? (
                <button type="button" onClick={onBuy} className="book-btn book-btn-dark border-0">
                  {buyText}
                  <i className="bi bi-arrow-right" />
                </button>
              ) : (
                <a href={buyLink} className="book-btn book-btn-dark">
                  {buyText}
                  <i className="bi bi-arrow-right" />
                </a>
              )}
              <a href={programLink} className="book-btn book-btn-light">
                <i className="bi bi-book" />
                {programText}
              </a>
            </div>

            <p className="book-availability">{availability}</p>
            <p className="book-price">{price}</p>
          </div>

          {/* COUVERTURE à droite */}
          <div className="col-lg-3">
            <img src={cover} alt={title} className="book-cover img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
