import React from 'react'
import Slider from '../Inc/Slider'
import HeroSlide from '../Inc/HeroSlide'
import CardsSection from '../Inc/cardsSection'
import Structure from '../Inc/Structure'
import Abouts from '../Inc/Abouts'
import StructMessage from '../Inc/StructMessage'
import StructFooter from '../Inc/StructFooter'
import { Link } from 'react-router-dom'

const Accueil = () => {
    return (
        <div>
            <HeroSlide />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="text-uppercase mb-1 fw-light">Nous sommes une plateforme chretiénne</p>
                            <h3 className="fw-bolder text-uppercase">découvrir notre communauté</h3>

                            <div className="underline mx-auto"></div>

                            {/* presentation */}
                            <Structure />
                            <h3 className="fw-bolder text-uppercase ">A propos</h3>
                            <div className="underline mx-auto"></div>
                            <Abouts />
                            {/* notre vision, mission et nos valeurs */}
                            <StructMessage />

                        </div>

                    </div>

                </div>

            </section>


          
            <StructFooter />
        </div>
    )
}

export default Accueil
