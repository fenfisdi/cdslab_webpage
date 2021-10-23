import { Button } from '@material-ui/core'
import React from 'react'
import AcordionItems from './childrens/acordionItems'
import NavNewVariable from './childrens/navNewVariable'
import { Container} from './styles'
const AgentsInitialPopulation = ({
  modalSettings,
  getDataFilters,
  groupsArray,
  setGroupsArray,
  handleSaveInfo,
  chain
}) => {

  return (
    <Container>
      <span style={{color:'#006064', fontSize:'19px', fontWeight:500}}>
        {modalSettings?.item?.variable?.toUpperCase()}
      </span>
      <NavNewVariable eventEmmiter={getDataFilters} variableToConfig={modalSettings?.item?.variable} chain={chain}/>
      <AcordionItems groupsArray={groupsArray} setGroupsArray={setGroupsArray} />
      
      <Button onClick={() => handleSaveInfo()}>Guardar</Button>
    </Container>    
  )

}

export default AgentsInitialPopulation
