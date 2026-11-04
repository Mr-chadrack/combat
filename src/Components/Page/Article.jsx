import React from 'react'
import CardsSection from '../Inc/cardsSection'
import Footer from '../Inc/Footer'
import Tittle from '../Inc/Tittle'

const Article = () => {
    return (
        <div>
            <div className='section'>


                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Tittle title=" Nos articles" />

                            <CardsSection />

                        </div>

                    </div>

                </div>
            </div>
          

        </div>
    )
}

export default Article
