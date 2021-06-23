import React, { useState, useContext } from 'react'
import Charter from './children/Charter'
import { CharterContainer, CharterIcon, CharterBody } from './styles'
import {languageContext} from '../../../config/languageContext'

const ModelCard = ({ options = [], iconWith = '200', iconHeight = '200', eventEmitted, direction = 'row', disabled = false, justifyContent='space-around', height='auto'  }) => {
  
  const {t} = useContext(languageContext)
  const [selected, setSelected] = useState('')
  
  const handleClickCharter = (charter) => {
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  

  return (
    <CharterContainer direction={direction} justifyContent={justifyContent} height={height}>
      {options.map((opt, index) => {
        const { name, indetifier, icon,titleIcon } = opt
        return (
          <CharterBody key={index}>
            {icon &&
              <CharterIcon>
                <img src={icon} alt="Cinque Terre" width={iconWith} height={iconHeight} />
              </CharterIcon>
            }
            <Charter
              key={index}
              name={t(name)}
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
