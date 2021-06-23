import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { renderComponentChildre } from '../../../utils/common'
import { useAgentsMobilityGroups } from './state'

const AgentsMobilityGroups = () => {
  const {
    redirectToSusceptibilityGroupsPage,
    tableColumns,
    items, 
    setItems,
    schemaItems,
  }= useAgentsMobilityGroups()

  const [componentChildren, setComponentChildren] = useState('distribution')
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  console.log(modalSettings)
  const Component = renderComponentChildre(componentChildren,{
    modalSettings,
    componentChildren,
    setComponentChildren:setComponentChildren,
    setModalSettings:setModalSettings
  })
 
  return (
    <>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
      <Grid 
        justify='flex-start'
        alignItems='center'
        container 
        item 
        xs={10}>
        <AgentsTableConfiguration
          showConfig={true}
          showCheck={true}
          distributionType="Mobility Group"
          columns={tableColumns}
          initialItems={items}
          setItems={setItems}
          schemaItems={schemaItems}
          handleSettings={({index,item})=>{
            console.log(index)
            console.log(item)
            setModalSettings({...modalSettings,open:true,item,index})
          }}          
        />  
      </Grid>
      <AgentsModalContainer
        distributionType="Mobility Group"
        open={modalSettings.open}
        handleClose={()=>{
          setModalSettings({...modalSettings,open:false})
        }}
        currentItem={null}
        render={Component}
      />
        
        
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={redirectToSusceptibilityGroupsPage}
        disabled={false}            
      />
    </>
  )
}

export default AgentsMobilityGroups
