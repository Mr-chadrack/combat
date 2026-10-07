import gradi from "../../image/gradi.jpg";

export default function Apropos() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image à gauche */}
          <div className="col-lg-6">
            <div
              className="position-relative overflow-hidden"
              style={{ borderRadius: "16px", height: "400px" }}
            >
              <img
                src={gradi}
                alt="À propos"
                className="w-100"
                style={{ objectFit: "cover" }}
              />

         
             
            </div>
          </div>

          {/* Texte à droite */}
          <div className="col-lg-6">
            <p className=" mb-3 text-start">
              <strong>Gradi Kanku Lubeya</strong> <br/> <i className="fst-italic">Fondateur du bon combat</i>
            </p>
            <p className="mb-3 text-start">
             Le bon combat est né d'une vision: créee
             un espace ou la parole de Dieu, la prière et l'enseignement peuvent contribuer à fortifier ceux qui traversent differentes formes de combats. A travers cette 
             plateforme, Gradi Lubeya souhaite partager l'evangile de Jésus-christ, encourager la prière et proposer des resources pour accompagner chacun dans sa marche avec Dieu
            </p>
            <a
              href="#contact"
              className="btn btn-link btn-sm px-3"
             
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
