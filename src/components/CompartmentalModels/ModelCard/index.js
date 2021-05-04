import React, { useState } from 'react'
import Charter from './children/Charter'
import { CharterContainer, CharterIcon, CharterBody } from './styles'



const ModelCard = ({ options = [], eventEmitted, direction = 'row', disabled = false }) => {
  const [selected, setSelected] = useState('')


  const handleClickCharter = (charter) => {
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  return (
    <CharterContainer direction={direction}>
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
              disabled={disabled}
            />
          </CharterBody>
        )
      })}
    </CharterContainer>
  )
}

export default ModelCard
