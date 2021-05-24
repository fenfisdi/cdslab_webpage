import React, { useState } from 'react'
import Charter from './children/Charter'
import { CharterContainer, CharterIcon, CharterBody } from './styles'

const ModelCard = ({ ruta='',options = [], eventEmitted, direction = 'row', disabled = false,  }) => {
  
  const [selected, setSelected] = useState('')
  
  const handleClickCharter = (charter) => {
    const { indetifier } = charter || {}
    console.log(ruta)
    const patchLocalStorage = localStorage.getItem('patch')
    localStorage.setItem('patch',patchLocalStorage + '/' +ruta)
    eventEmitted(charter)
    setSelected(indetifier)
  }

  return (
    <CharterContainer direction={direction}>
      {options.map((opt, index) => {
        const { name, indetifier, icon,titleIcon } = opt
        return (
          <CharterBody key={index}>
            {icon &&
              <CharterIcon>
                <img src={icon} alt="Cinque Terre" width="100" height="100" />
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
              titleIcon={titleIcon}
            />
          </CharterBody>
        )
      })}
    </CharterContainer>
  )
}

export default ModelCard
