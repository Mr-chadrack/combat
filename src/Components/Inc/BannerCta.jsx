import Formation from "../Page/Formation";

export default function BannerCta({
  title,
  buttonText,
  link,
  paragraphe,
}) {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="cta-banner">
          {/* Formes décoratives en arrière-plan */}
          <span className="cta-shape cta-shape-1" />
          <span className="cta-shape cta-shape-2" />
          <span className="cta-shape cta-shape-3" />
          <span className="cta-shape cta-shape-4" />

          <div className="cta-content text-center">
            <h2 className="cta-title">{title}</h2>

            <p className="cta-text">
                {paragraphe}
            </p>

            <a href={link} className="cta-button">
              <span>{buttonText}</span>
              <span className="cta-button-icon">
                <i className="bi bi-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
