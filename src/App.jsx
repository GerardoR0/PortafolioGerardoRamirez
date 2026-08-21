import './App.css'
import React from 'react'
import HeroComponent from './assets/Components/HeroComponent/HeroComponent'
import NavbarComponent from './assets/Components/NavbarComponent/NavbarComponent'
import SobreMiComponent from './assets/Components/SobreMiComponent/SobreMiComponent'
import EducacionComponent from './assets/Components/EducacionComponent/EducacionComponent'
import ProyectosComponents from './assets/Components/ProyectosComponents/ProyectosComponents'
import HerramientaComponent from './assets/Components/HerramientaComponent/HerramientaComponent'
import ExperienciaComponent from './assets/Components/ExperienciaComponent/ExperienciaComponent'
import ContactoComponent from './assets/Components/ContactoComponent/ContactoComponent'
import FooterComponent from './assets/Components/FooterComponent/FooterComponent'

function App() {

  return (
    <>
    <NavbarComponent />
    <HeroComponent />
    <SobreMiComponent />
    <EducacionComponent />
    <ProyectosComponents />
    <HerramientaComponent />
    <ExperienciaComponent />
    <ContactoComponent />
    <FooterComponent />
    </>
  )
}

export default App
