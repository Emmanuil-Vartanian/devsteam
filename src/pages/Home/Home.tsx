import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { Container } from './style'

import Header from './components/Header'
import Main from './components/Main'
import FeatureProperties from './components/FeatureProperties'
import Benefits from './components/Benefits'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const Home: React.FC = () => {
  const location = useLocation()

  const blocks = {
    '/': useRef(null),
    features: useRef(null),
    'about-us': useRef(null),
    contact: useRef(null)
  }

  const scrollToBlock = (block = '') => {
    console.log('object')
    const locationName = block.length > 1 ? block.replace('/', '') : block
    blocks[locationName].current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToBlock(location.pathname)
    }, 100)
  }, [location])

  return (
    <div ref={blocks['/']}>
      <Container>
        <Header />
        <Main />
      </Container>
      <FeatureProperties refBlock={blocks.features} />
      <Container>
        <Benefits refBlock={blocks['about-us']} />
        <ContactForm refBlock={blocks.contact} />
      </Container>
      <Footer />
    </div>
  )
}

export default Home
