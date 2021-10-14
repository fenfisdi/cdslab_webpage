import React from 'react'
import AcordionItems from './childrens/acordionItems'
import NavNewVariable from './childrens/navNewVariable'
import { Container} from './styles'
const AgentsInitialPopulation = ({
  modalSettings,
  getDataFilters,
  groupsArray,
  setGroupsArray
}) => {

    
  return (
    <Container>
      <span style={{color:'#006064', fontSize:'19px', fontWeight:500}}>
        {modalSettings?.item?.variable?.toUpperCase()}
      </span>
      <NavNewVariable eventEmmiter={getDataFilters} variableToConfig={modalSettings?.item?.variable}/>
      <AcordionItems groupsArray={groupsArray} setGroupsArray={setGroupsArray} />
    </Container>    
  )

}

export default AgentsInitialPopulation
