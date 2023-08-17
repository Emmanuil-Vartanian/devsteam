import React from 'react'

import { Container } from './style'

import Header from './components/Header'
import Main from './components/Main'

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  )
}

export default Home
