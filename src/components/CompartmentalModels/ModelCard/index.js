import React, { useState } from 'react'
import { usePath } from '../../PathContext'
import Charter from './children/Charter'
import { CharterContainer, CharterIcon, CharterBody } from './styles'

const ModelCard = ({ options = [], eventEmitted, direction = 'row', disabled = false, justifyContent='space-around', height='auto'  }) => {
  
  const [selected, setSelected] = useState('')
  const [path, setPath] = usePath()

  const handleClickCharter = (charter) => {
    handlePath(charter)
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  const handlePath = (charter) =>{
    if(path){
      const newPath = [...path,{name: charter.ruta}]
      handlePathSessionStorage(newPath)
      setPath(newPath)
    }else{
      const newPath = [{name: charter.ruta}]
      handlePathSessionStorage(newPath)
      setPath(newPath)
    }
  }

  const handlePathSessionStorage = (newPath) => {
    sessionStorage.setItem('path', JSON.stringify(newPath) )
  }

  return (
    <CharterContainer direction={direction} justifyContent={justifyContent} height={height}>
      {options.map((opt, index) => {
        const { name, indetifier, icon,titleIcon } = opt
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
              titleIcon={titleIcon}
            />
          </CharterBody>
        )
      })}
    </CharterContainer>
  )
}

export default ModelCard
