import React, { useState } from 'react'
import Charter from './children/Charter'
import { useModelCardState } from './state'
import { CharterContainer } from './styles'



const ModelCard = ({ options = [], eventEmitted }) => {
  const [selected, setSelected] = useState('')


  const handleClickCharter = (charter) => {
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  return (
    <CharterContainer>
      {options.map((opt, index) => {
        const { name, indetifier } = opt
        return (
          <Charter
            key={index}
            name={name}
            indetifier={indetifier}
            handleClickCharter={handleClickCharter}
            selected={selected}
            extraOption={opt}
          />
        )
      })}
    </CharterContainer>
  )
}

export default ModelCard
