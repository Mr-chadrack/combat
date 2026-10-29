import { useState } from 'react'
import './App.css'
import Navbar from './Components/Inc/Navbar'
import Accueil from './Components/Page/Accueil'
import Contact from './Components/Page/Contact'
import Article from './Components/Page/Article'
import Aprops from './Components/Page/Aprops'
import Librairie from './Components/Page/Librairie'
import Formation from './Components/Page/Formation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./Components/Inc/Layout";

function App() {


  return (
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Accueil />} />
    <Route path="/Aprops" element={<Aprops />} />
    <Route path="/Article" element={<Article />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Formation" element={<Formation />} />
    <Route path="/Librairie" element={<Librairie />} />
  </Route>
</Routes>
  )
}

export default App
