import React from 'react'
import { useState, useMemo } from "react";
import post from '../../image/post.jpeg'
import partage from '../../image/partage.jpeg'
import tem from '../../image/tem.jpeg'
import pasteur from '../../image/pasteur.jpeg'
import Tittle from '../Inc/Tittle'


const Formation = () => {

    const information = [
        {
            title: "Combat spirituel",
            category: "Prières",
            image: post,
            youtube: "https://www.youtube.com/@VOTRE-CHAINE",
        },
        {
            title: "Enseignement",
            category: "Prédications",
            image: partage,
            youtube: "https://www.youtube.com/@VOTRE-CHAINE",
        },
        {
            title: "Partage de la foi",
            category: "Partages",
            image: pasteur,
            youtube: "https://www.youtube.com/@VOTRE-CHAINE",
        },
        {
            title: "Témoignages de vie",
            category: "Témoignages",
            image: tem,
            youtube: "https://www.youtube.com/@VOTRE-CHAINE",
        },
    
    ];

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Tous");


    // Les onglets sont créés à partir des catégories présentes
    const categories = useMemo(
        () => ["Tous", ...new Set(information.map((f) => f.category))],
        []
    );

    // Filtre par catégorie, puis par recherche
    const visible = information.filter(
        (f) =>
            (category === "Tous" || f.category === category) &&
            f.title.toLowerCase().includes(search.trim().toLowerCase())
    );




    return (

        <div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Tittle title="Nos Formations" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="formations py-5">
                <div className="container">
                    {/* Recherche */}
                    <div className="formations-search mb-3">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Trouver une formation"
                            aria-label="Rechercher une formation"
                        />
                        <i className="bi bi-search" />
                    </div>

                    {/* Onglets de catégories */}
                    <div className="formations-tabs mb-4" role="tablist">
                        {categories.map((c) => (
                            <button
                                key={c}
                                type="button"
                                role="tab"
                                aria-selected={category === c}
                                className={`formations-tab ${category === c ? "active" : ""}`}
                                onClick={() => setCategory(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    {/* Grille de formations */}
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
                        {visible.map((f) => (
                            <div className="col" key={f.title}>
                                <a
                                    href={f.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="formation-card"
                                >
                                    <div className="formation-photo">
                                        <img src={f.image} alt={f.title} loading="lazy" />
                                        <span className="formation-play">
                                            <i className="bi bi-youtube" />
                                        </span>
                                    </div>
                                    <p className="formation-title">{f.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>

                    {visible.length === 0 && (
                        <p className="text-center text-muted mt-4">Aucune formation trouvée.</p>
                    )}
                </div>
            </section>

        </div>
    )
}

export default Formation
