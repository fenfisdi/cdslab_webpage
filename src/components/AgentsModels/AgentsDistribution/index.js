import { Button } from '@material-ui/core'
import React from 'react'
import AgentsDistributionCard from './AgentsDistributionCard'
import { useAgentsDistributionState } from './state'
import { Container } from './style'

export const AgentsDistribution = ({ setModalSettings, modalSettings, setComponentChildren, distributionList }) => {
  
  const onFinishSettings = () => {
    /* const itemCopy = { ...modalSettings.item }
    itemCopy.state = 'CONFIGURED'
    itemCopy.distribution = {
      value1: 'uno',
      value2: 'dos'
    } */
    setModalSettings({...modalSettings,open:false})
  }

  const onClose = () => {
    /* const itemCopy = { ...modalSettings.item }
    itemCopy.state = '' */
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
