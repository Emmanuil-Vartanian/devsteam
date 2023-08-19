import React from 'react'

import { Container } from './style'

import Header from './components/Header'
import Main from './components/Main'
import FeatureProperties from './components/FeatureProperties'

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
      <FeatureProperties />
    </div>
  )
}

export default Home
