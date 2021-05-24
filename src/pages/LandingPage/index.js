import React from 'react'
import Header from './HeaderPage/header'
import Contents from './ContentPage/contents'
import { LandingPageContainer } from './styles'

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <Contents />
    </LandingPageContainer>
  )
}

export default LandingPage
