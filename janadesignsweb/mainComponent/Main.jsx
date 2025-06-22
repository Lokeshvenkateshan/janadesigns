import React from 'react'
import NavBar from '../NavbarComponent/NavBar'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Catalogue from '../pages/Catalogue'
import FlagshipWork from '../pages/FlagshipWork'
import Information from '../pages/Information'
import Footer from '../pages/Footer'
import Contact from '../pages/Contact'

const Main = () => {
  return (
    <div>
      <NavBar/>
      
      <section id='section-home'>
        <Home/>
      </section>
      
      <section id='section-services'>
        <Services/>
      </section>

      <section id='section-catalogue'>
        <Catalogue/>
      </section>

      <section id='section-flagship'>
        <FlagshipWork/>
      </section>

      <section>
        <Information/>
      </section>

      <section id='section-contact'>
        <Contact/>
      </section>

      <section>
        <Footer/>
      </section>

    </div>
  )
}

export default Main
