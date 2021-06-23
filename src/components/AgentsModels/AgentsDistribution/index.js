import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AgentsDistributionCard from './AgentsDistributionCard'
import { useAgentsDistributionState } from './state'
import { Container } from './style'

export const AgentsDistribution = ({ handleClose, item,setComponentChildren }) => {

  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)

  const { loading,distributionList } = useAgentsDistributionState()

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


  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }
  
  const renderCards = () => (
    <Container>
      {distributionList.map((item, i) => (
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
