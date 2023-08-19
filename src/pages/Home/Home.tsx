import React from 'react'

import { Container } from './style'

import Header from './components/Header'
import Main from './components/Main'
import FeatureProperties from './components/FeatureProperties'
import Benefits from './components/Benefits'
import ContactForm from './components/ContactForm'

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
      <FeatureProperties />
      <Container>
        <Benefits />
        <ContactForm />
      </Container>
    </div>
  )
}

export default Home
