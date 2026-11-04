

/**
 * Bannière réutilisable : seul `title` est obligatoire.
 * <Banner title="Nos Formations" />
 */
export default function Banner({
  title,
  subtitle,        // facultatif
  height = 260,    // facultatif : hauteur en pixels
}) {
  return (
    <section className="page-banner" style={{ minHeight: height }}>
      {/* Motif de formes en arrière-plan */}
      <svg
        className="page-banner-pattern"
        viewBox="0 0 1400 260"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* gélule en haut à gauche */}
          <rect x="70" y="-60" width="340" height="130" rx="65" stroke="#0a4f7e" strokeWidth="34" />
          {/* arcs concentriques centre-droit */}
          <path d="M 780 280 A 170 170 0 0 1 1120 280" stroke="#0a4473" strokeWidth="42" />
          <path d="M 850 280 A 100 100 0 0 1 1050 280" stroke="#0b5584" strokeWidth="34" />
          {/* grand arc centre-gauche */}
          <path d="M 430 290 A 120 120 0 0 1 670 290" stroke="#0a4e7c" strokeWidth="40" />
          {/* courbe en S à gauche */}
          <path d="M -30 110 C 60 70 130 110 100 170 C 70 230 -10 210 -40 250" stroke="#0b5584" strokeWidth="38" />
          {/* barres verticales arrondies */}
          <path d="M 1250 40 L 1250 270" stroke="#0a4473" strokeWidth="36" />
          <path d="M 905 30 L 905 140" stroke="#0b5584" strokeWidth="30" />
          {/* quart de cercle en haut à droite */}
          <path d="M 1430 -10 A 170 170 0 0 0 1260 -10" stroke="#0a4f7e" strokeWidth="38" />
          {/* vague en haut au centre */}
          <path d="M 560 -20 C 600 60 700 70 760 20" stroke="#0b5584" strokeWidth="34" />
        </g>
        {/* demi-disque et point pleins */}
        <path d="M 200 70 A 40 40 0 0 1 280 70 Z" fill="#0b5584" />
        <circle cx="1340" cy="170" r="22" fill="#0a4473" />
      </svg>

      <div className="container position-relative text-center text-white">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
