import React from 'react'
import Tittle from '../Inc/Tittle'
import ContactForm from '../Inc/ContactForm'



const Contact = () => {
    return (
        <div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                        <Tittle title="Envoyer un combat"/>
                      
                        </div>
                    </div>
                </div>

            </div>
             <section className="py-5">
                 <ContactForm />
             </section>
        </div>
    )
}

export default Contact
