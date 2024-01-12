import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/> 
      <main>
        <Container>
          Welcome
        </Container>
      
      </main>
      <Footer/>
    </>
  )
}

export default App
