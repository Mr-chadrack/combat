import gradi from "../../image/gradi.jpg";

export default function Apropos() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-2">
          {/* Image à gauche */}
          <div className="col-lg-6">
            <div
              className="position-relative overflow-hidden"
              style={{ borderRadius: "16px", height: "400px" }}
            >
              <img
                src={gradi}
                alt="À propos"
                className="w-75"
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
            <br/>
            <br/>
            <strong> Notre vision</strong>
            <br/>
            <br/>
            le bon combat est une plateforme chrétienne née d'une volonté d'annoncer jésus-christ, de transmettre la parole de Dieu et d'encourager chacun à faire face aux combats
            de la vie avec fo. 
            <br/>
            <br/>
            Nous coryons que la foi chrétienne ne se limite pas à connaitre Dieu, mais qu'elle nous appelle également à marché avec lui, à prier, a persérvérer et à demeurer
            ferme au milieu
            
            </p>
          
            {/*.     
              <a
              href="Aprops"
              className="btn btn-link btn-sm px-3"
             
            >
              En savoir plus
            </a>
            */}   
          </div>
        </div>
      </div>
    </section>
  );
}
