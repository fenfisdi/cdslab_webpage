/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import { Container } from './styles'
import { useDistributionsConfigState } from './state'
import DistributionCard from './DistributionCard'
import ModalRoot from './ModalRoot'

const DistributionsSettings = ({
  initialItems,
  settingsComponent,
  distributionType
}) => {
  const {
    items,
    handleSettings,
    openSettings,
    handleCloseSettings,
    currentIndex
  } = useDistributionsConfigState({
    initialItems
  })

  useEffect(() => {
    renderCards()
  }, [items])

  const renderCards = () => (
    <Container>
      {items.map((item, i) => {
        return <DistributionCard item={item} index={i} handleSettings={handleSettings}/>
      })}
    </Container>
  )

  return (
    <>
      {renderCards()}
      <ModalRoot
        distributionType={distributionType}
        open={openSettings}
        handleClose={handleCloseSettings}
        // eslint-disable-next-line react/no-children-prop
        children={settingsComponent} 
        currentItem={items[currentIndex]}
      />
    </>
  )
}

export default DistributionsSettings
