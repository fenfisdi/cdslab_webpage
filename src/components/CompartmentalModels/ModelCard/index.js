import React, { useState } from 'react'
import { usePath } from '../../PathContext'
import Charter from './children/Charter'
import { CharterContainer, CharterIcon, CharterBody } from './styles'

const ModelCard = ({ ruta='',options = [], eventEmitted, direction = 'row', disabled = false,  }) => {
  
  const [selected, setSelected] = useState('')
  const [path, setPath] = usePath()

  const handleClickCharter = (charter) => {
    handlePath()
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  const handlePath = () =>{
    if(path){
      const newPath = [...path,{name: ruta}]
      handlePathLocalStorage(newPath)
      setPath(newPath)
    }else{
      const newPath = [{name: ruta}]
      handlePathLocalStorage(newPath)
      setPath(newPath)
    }
  }

  const handlePathLocalStorage = (newPath) => {
    sessionStorage.setItem('path', JSON.stringify(newPath) )
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
