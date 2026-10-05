import React from 'react'
import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import bibHero from '../../image/bibHero.jpg'

const slides = [
  {
    image: bibHero,
    title: "Bienvenue sur notre site",
    text: "Un texte d'accroche sur votre activité.",
    cta: "En savoir plus",
  },
  {
    image: bibHero,
    title: "Notre savoir-faire",
    text: "Décrivez ici votre deuxième message.",
  },
  {
    image: bibHero,
    title: "Contactez-nous",
    text: "Et votre troisième message.",
  },
];

export default function HeroSlide() {
     const carouselRef = useRef(null);

       // Initialise le carrousel Bootstrap une fois le composant monté
       useEffect(() => {
         const instance = new Carousel(carouselRef.current, {
           interval: 5000,
           ride: "carousel",
         });
         return () => instance.dispose();
       }, []);
     
       return (
         <div
           id="heroCarousel"
           ref={carouselRef}
           className="carousel slide carousel-fade hero-carousel"
         >
           <div className="carousel-indicators">
             {slides.map((s, i) => (
               <button
                 key={s.title}
                 type="button"
                 data-bs-target="#heroCarousel"
                 data-bs-slide-to={i}
                 className={i === 0 ? "active" : ""}
                 aria-current={i === 0 ? "true" : undefined}
                 aria-label={`Diapositive ${i + 1}`}
               />
             ))}
           </div>
     
           <div className="carousel-inner">
             {slides.map((s, i) => (
               <div key={s.title} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                 <img src={s.image} className="d-block w-100" alt={s.title} />
                 <div className="carousel-caption">
                   <h1 className="display-4 fw-bold">{s.title}</h1>
                   <p className="lead">{s.text}</p>
                   {s.cta && (
                     <a href="#" className="btn btn-light btn-lg">{s.cta}</a>
                   )}
                 </div>
               </div>
             ))}
           </div>
     
           <button className="carousel-control-prev" type="button"
                   data-bs-target="#heroCarousel" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true" />
             <span className="visually-hidden">Précédent</span>
           </button>
           <button className="carousel-control-next" type="button"
                   data-bs-target="#heroCarousel" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true" />
             <span className="visually-hidden">Suivant</span>
           </button>
         </div>
       );
}
