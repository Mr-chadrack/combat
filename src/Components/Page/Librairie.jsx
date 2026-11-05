import React from 'react'
import CardsSection from '../Inc/cardsSection'
import Footer from '../Inc/Footer'
import Tittle from '../Inc/Tittle'
import Book from '../Inc/Book'
import livre1 from '../../image/livre1.jpeg'
import god from '../../image/god.jpeg'
import BuyModal from '../Inc/BuyModal'
import { useState } from "react";


// Chaque livre a ses propres informations
const books = [
    {
        id: 1,
        intro: "Équipez-vous pour la victoire :",
        title: "LE BON COMBAT",
        quote: "Équipez-vous pour la victoire",
        subtitle: "Ouvrage de Mr Chadrack ",
        buyText: "Acheter maintenant",
        price: "15,59 $US",
        availability: "Disponible le 15 septembre 2026",
        cover: livre1,
    },
    {
        id: 2,
        intro: "Découvrez le livre :",
        title: "L'AMOUR DE DIEU",
        quote: "“Une phrase d'accroche pour ce livre.”",
        subtitle: "ouvrage de Mr Chadrack ",
        buyText: "Acheter maintenant",
        price: "15,00 $US",
        availability: "Disponible maintenant",
        cover: god,
    },
];

const Librairie = () => {
    // Livre choisi par le client (null = fenêtre fermée)
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

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
                            {books.map((book, i) => (
                                <Book
                                    key={book.id}
                                    compact={i > 0}
                                    title={book.title}
                                    quote={book.quote}
                                    subtitle={book.subtitle}
                                    buyText={book.buyText}
                                    price={book.price}
                                    availability={book.availability}
                                    cover={book.cover}
                                    onBuy={() => setSelected(book)}
                                />
                            ))}

                            
                                  {/* UNE seule fenêtre, qui affiche le livre sélectionné */}
                                  <BuyModal
                                    open={selected !== null}
                                    onClose={() => setSelected(null)}
                                    product={selected?.title}
                                    price={selected?.price}
                                    mpesaNumber="+243 825154369"
                                    mpesaName="lofo"
                                    whatsappNumber="243979811837"
                                  />

                        </div>

                    </div>

                </div>

            </section>

         


        </div>
    )
}

export default Librairie
