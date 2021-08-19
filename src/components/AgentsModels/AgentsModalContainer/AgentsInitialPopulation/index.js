import React, { useState } from 'react'
import NavNewVariable from './childrens/navNewVariable'
import { Container} from './styles'
const AgentsInitialPopulation = ({
  modalSettings,
  setModalSettings,
  hanldeDone,
  getDataFilters
}) => {

  const[isValid,setIsValid] = useState(false)
    
  return (
    <Container>
      <span style={{color:'#006064', fontSize:'19px', fontWeight:'500'}}>
        {modalSettings?.item?.variable.toUpperCase()}
      </span>
      <NavNewVariable eventEmmiter={getDataFilters} variableToConfig={modalSettings?.item?.variable}/>
  
    </Container>    
  )

}

export default AgentsInitialPopulation
