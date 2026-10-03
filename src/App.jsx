import { useState } from 'react'
import './App.css'
import Navbar from './Components/Inc/Navbar'
import Accueil from './Components/Page/Accueil'
import Contact from './Components/Page/Contact'
import Article from './Components/Page/Article'
import Aprops from './Components/Page/Aprops'
import Librairie from './Components/Page/Librairie'
import Formation from './Components/Page/Formation'

function App() {


  return (
    <div>
      <Accueil/>
      <Contact/>
      <Article/>
      <Aprops/>
      <Librairie/>
      <Formation/>
    </div>
  )
}

export default App
