import React from 'react'
import {About, Footer, Header, Skills, Certificates,Testimonial, Work} from './container'
import {Navbar} from './components'
import {AppWrap} from './wrapper'

import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <AppWrap/>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Certificates/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default App