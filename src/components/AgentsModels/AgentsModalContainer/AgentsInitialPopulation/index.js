import React, { useState } from 'react'
import NavNewVariable from './childrens/navNewVariable'
import { Container} from './styles'
const AgentsInitialPopulation = ({
  modalSettings,
  setModalSettings,
  hanldeDone
}) => {

  const[isValid,setIsValid] = useState(false)
  
  const getDataFilters = (data)=>{
    console.log('getDataFilters:::>',data)
  }

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
