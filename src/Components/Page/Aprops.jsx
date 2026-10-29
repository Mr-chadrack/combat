import React from 'react'
import Footer from '../Inc/Footer'
import Abouts from '../Inc/Abouts'
import CardsSection from '../Inc/cardsSection'

const Aprops = () => {
    return (
        <div>

        <section className="section bgImp ">

                       <div className="container">
                           <div className="row">
                               <div className="col-md-12 text-center">
                                     <h3 className="fw-bolder text-uppercase ">A propos</h3>
                                   <div className="underline mx-auto"></div>
       
                                   <Abouts />
                               </div>
                           </div>
       
                       </div>
                   </section>
          

        </div>
    )
}

export default Aprops
