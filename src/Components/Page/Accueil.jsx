import React from 'react'
import Slider from '../Inc/Slider'
import HeroSlide from '../Inc/HeroSlide'
import CardsSection from '../Inc/cardsSection'
import Structure from '../Inc/Structure'
import Formation from "../Page/Formation";
import Abouts from '../Inc/Abouts'
import StructMessage from '../Inc/StructMessage'
import Footer from '../Inc/Footer'
import Mission from '../Inc/Mission'
import BannerCta from '../Inc/BannerCta'
import DonateModal from '../Inc/DonaModal'
import { useState } from "react";
import { Link } from 'react-router-dom'

const Accueil = () => {
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState(null);
    return (
        <div>
            <HeroSlide />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* presentation */}
                            <Mission />
                            <BannerCta title='Voulez-vous savoir plus sur nos formations ?' buttonText='Formez-vous' link='/Formation' paragraphe='le bon combat est une plateforme chrétienne née d une volonté d annoncer jésus-christ  de transmettre la parole de Dieu et d encourager chacun à faire face aux combats de la vie avec foi.' />
                            <p className=" mb-1 fw-light">Nous sommes une plateforme chretiénne</p>
                            <h3 className="fw-bolder" style={{ color: '#15336b' }}>découvrir notre communauté</h3>
                            <div className="underline mx-auto"></div>
                            <Structure />
                        </div>
                    </div>
                </div>
            </section>

            {/* section aprops */}
            <section className="section bgImp">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 text-center">
                            <BannerCta title='Prêts à nous porté votre soutien ?' buttonText='Nous soutenir' paragraphe='Devenez un bâtisseur du Royaume : soutenez l évangélisation pour que la 
                          lumière de la vérité éclaire chaque nation'
                                onClick={() => setOpen(true)} />
                        </div>
                    </div>
                </div>
            </section>
            {/* notre vision, mission et nos valeurs */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <StructMessage />
                        </div>
                    </div>
                </div>
            </section>
            <DonateModal
                open={open}
                onClose={() => setOpen(false)}
                numbers={[
                    { operator: "M-Pesa", number: "+243 82 515 437", holder: "Votre nom" },
                ]}
                whatsappNumber="243979811837"
            />
        </div>
    )
}

export default Accueil
