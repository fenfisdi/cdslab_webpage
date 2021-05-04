import React, { useState } from 'react'
import { Fragment } from 'react'
import Charter from './children/Charter'
import { useModelCardState } from './state'
import { CharterContainer, CharterIcon, CharterBody } from './styles'



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
        const { name, indetifier, icon } = opt
        return (
          <CharterBody key={index}>
            {icon &&
              <CharterIcon>
                <img src={icon} alt="Cinque Terre" width="200" height="200" />
              </CharterIcon>
            }
            <Charter
              key={index}
              name={name}
              indetifier={indetifier}
              handleClickCharter={handleClickCharter}
              selected={selected}
              extraOption={opt}
            />
          </CharterBody>
        )
      })}
    </CharterContainer>
  )
}

export default ModelCard
