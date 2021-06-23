import React from 'react'
import { Container, CardContent, StyledCard, Title } from './style'




export default function AgentsDistributionCard({ item ,handleNextStep }) {
  
  return (
    <Container>
      <StyledCard onClick={() => handleNextStep(item)}>
        <CardContent>
          <Title>{item}</Title>
        </CardContent>
      </StyledCard>
    </Container>
  )
}
