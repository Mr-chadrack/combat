import React from 'react'
import { useState } from "react";
import attaque from '../../image/attaque.jpg'


const items = [
  {
    title: "Le bon combat",
    text: "Notre équipe met son savoir-faire et ses années d'expérience au service de votre projet, du conseil jusqu'à la réalisation.",
  },
  {
    title: "Notre mission",
    text: "Chaque projet est une opportunité de créer et d'innover. Nous concevons des campagnes uniques et percutantes qui captivent votre audience tout en intégrant les dernières technologies et tendances.",
  },
  {
    title: "Tu sais pourquoi tu dois envoyer ton combat ?",
    text: "Chaque solution est adaptée à vos besoins, à votre public et à vos objectifs. Vous restez au centre de la démarche.",
  },
  {
    title: "ce que tu dois savoir",
    text: "Nous suivons des indicateurs clairs et partageons régulièrement les résultats, pour que vous sachiez exactement ce qui fonctionne.",
  },
];


export default function Mission({
  image = attaque,
}) {
  // index de l'élément ouvert (null = tout fermé)
  const [open, setOpen] = useState(1);

  return (
    <section className="why-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* COLONNE GAUCHE : texte + accordéon */}
          <div className="col-lg-6">
        

            <h2 className="why-title">
            Nous crayons que la foi chrétienne ne se limite pas à connaitre Dieu, mais a persérvérer et à demeurer ferme au milieu !
            </h2>

            <div className="why-list">
              {items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.title} className={`why-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="why-header"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="why-item-title">{item.title}</span>
                      <span className="why-icon">
                        <i className={`bi ${isOpen ? "bi-arrow-up" : "bi-arrow-down"}`} />
                      </span>
                    </button>

                    <div className="why-body">
                      <div className="why-body-inner">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLONNE DROITE : illustration */}
          <div className="col-lg-6 text-center">
            <img src={image} alt="Illustration" className="why-image img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}


