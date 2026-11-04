import React from 'react'
import CardsSection from '../Inc/cardsSection'
import Footer from '../Inc/Footer'
import Tittle from '../Inc/Tittle'
import Book from '../Inc/Book'
import livre1 from '../../image/livre1.jpeg'
import god from '../../image/god.jpeg'

const Librairie = () => {
    return (
        <div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Tittle title="Notre librairie" />
                        </div>

                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Book intro="  Équipez-vous pour la victoire :" title="LE BON COMBAT" quote="Équipez-vous pour la victoire"
                                subtitle="Ouvrage de Mr Chadrack "
                                buyText="Acheter maintenant"
                                buyLink="#"
                                programLink="#"
                                availability="Disponible le 15 septembre 2026"
                                price="15,59 $US"
                                cover={livre1}
                            />
                              <Book intro="  Équipez-vous pour la victoire :" title="LE BON COMBAT" quote="Équipez-vous pour la victoire"
                                subtitle="Ouvrage de Mr Chadrack "
                                buyText="Acheter maintenant"
                                buyLink="#"
                                programLink="#"
                                availability="Disponible le 15 septembre 2026"
                                price="15,59 $US"
                                cover={god}
                            />
                        </div>

                    </div>

                </div>

            </section>




        </div>
    )
}

export default Librairie
