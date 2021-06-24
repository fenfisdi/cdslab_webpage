import { Button } from '@material-ui/core'
import React from 'react'
import AgentsDistributionCard from './AgentsDistributionCard'
import { Container } from './style'

export const AgentsDistribution = ({ setModalSettings, modalSettings, setComponentChildren, distributionList }) => {
  
  const onFinishSettings = () => {
    
    setModalSettings({...modalSettings,open:false})
  }

  const onClose = () => {
    
    setModalSettings({...modalSettings,open:false})
  }


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
    <div>
      <p>I am the settings component for <strong>{modalSettings.item?.name}</strong></p>
      {renderCards()}
      <Button onClick={() => onFinishSettings()}>Save and finish</Button>
      <Button onClick={() => onClose()}>Cancel</Button>
    </div>
  )
}
