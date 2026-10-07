import fleche from '../../image/fleche.jpg'
import nous from '../../image/nous.jpg'
const cards = [
  {
    image: fleche,
    title: "Le bon combat, c'est quoi",
    text: " Le bon combat est une plateforme chrétienne dédiée à l'évangélisation, à l'enseignement de la parole de Dieu et à la prère. A travers nos émissions, nos enseignements, nos ressources et nos action, nous voulons conduire les hommes et les femmes à découvrir Christ, à grandir dans leur foi à affronter les combats de la vie avec Dieu.",
    button: "En savoir plus",
    link: "#",
  },
  {
    image: nous,
    title: "Notre mission",
    text: "Découvrez prochainement les émission et enseognements du Bon Combat : des messages pour vous aider à comprendre la parole de Dieu, fortifier votre foi et affronter les combats de la vie avec christ.",
    button: "Découvrir",
    link: "#",
  },
];
export default function CardsSection(){
      return (
    <section className="cards-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {cards.map((c) => (
            <div key={c.title} className="col-12 col-lg-10">
              <div className="card info-card">
                <div className="row g-0 h-100">
                  {/* PHOTO à gauche */}
                  <div className="col-md-5">
                    <img src={c.image} className="card-photo" alt={c.title} />
                  </div>

                  {/* TEXTE à droite */}
                  <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                      <h3 className="card-title h4">{c.title}</h3>
                      <p className="card-text text-start">{c.text}</p>
                      <a href={c.link} className="btn btn-link align-self-start">
                        {c.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}