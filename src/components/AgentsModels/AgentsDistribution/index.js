import React from 'react'
import AgentsDistributionCard from './AgentsDistributionCard'
import { BodyContainer, Container } from './style'

export const AgentsDistribution = ({  modalSettings, setComponentChildren, distributionList, modalTitle }) => {
  

  const handleNextStep = (nexStep) =>{
    setComponentChildren(nexStep.toUpperCase())
  }
  
  const renderCards = () => (
    <Container>
      {distributionList.map((item, i) => (
        <AgentsDistributionCard
          key={i}
          item={item}
          index={i}          
          handleNextStep={handleNextStep}
        />
      ))}
    </Container>
  )

  return (
    <BodyContainer>
      <span>{modalTitle}</span>
      <p>I am the settings component for <strong>{modalSettings.item?.name}</strong></p>
      {renderCards()}      
    </BodyContainer>
  )
}
