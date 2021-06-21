import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AgentsDistributionCard from './AgentsDistributionCard'
import { Container } from './style'

export const AgentsDistribution = ({ handleClose, item,setComponentChildren }) => {

  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)
  const onFinishSettings = () => {
    const itemCopy = { ...item }
    itemCopy.state = 'CONFIGURED'
    itemCopy.distribution = {
      value1: 'uno',
      value2: 'dos'
    }
    handleClose(itemCopy)
  }

  const onClose = () => {
    const itemCopy = { ...item }
    itemCopy.state = ''
    handleClose(itemCopy)
  }

  const initialItemsDistribution = [
    {
      name: 'constant',
      description:
        'this is a dummy description for Diagnosis, this is a dummy description for Diagnosis, this is a dummy description for Diagnosis',
      state: ''
    },
    {
      name: 'otro',
      description: 'this is a dummy description for Quarentine',
      state: ''
    },
    {
      name: 'Hospitalization',
      description: 'this is a dummy description for Hospitalization',
      state: ''
    }
  ]

  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }
  
  const renderCards = () => (
    <Container>
      {initialItemsDistribution.map((item, i) => (
        <AgentsDistributionCard
          key={i}
          item={item}
          index={i}
          handleSettings={handleSettings}
          setComponentChildren={setComponentChildren}
        />
      ))}
    </Container>
  )

  return (
    <div>
      <p>I am the settings component for {item?.name}</p>
      {renderCards()}
      <Button onClick={() => onFinishSettings()}>Save and finish</Button>
      <Button onClick={() => onClose()}>Cancel</Button>
    </div>
  )
}
