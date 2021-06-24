import { Grid } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { OPTIONS_MODAL } from '../../../constants/agents'
import { HELP_INFORMATION_MOBILITY_MODELS } from '../../../constants/helpInformation'
import AgentsBaseContext from '../../../context/agentsBase.context'
import agentsBaseHOC from '../../../utils/agentsBaseHOC'
import { renderComponentChildre } from '../../../utils/common'
import { useAgentsMobilityGroups } from './state'

const AgentsMobilityGroups = () => {
  const context = useContext(AgentsBaseContext)
  const { distributionList } = context
  const {
    redirectToSusceptibilityGroupsPage,
    tableColumns,
    items, 
    setItems,
    schemaItems,
  }= useAgentsMobilityGroups()

  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISTRIBUTION)
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  
  const Component = renderComponentChildre(componentChildren,{
    modalSettings,
    componentChildren,
    setComponentChildren:setComponentChildren,
    setModalSettings:setModalSettings
  })

  return (
    <Fragment>
      {distributionList.length > 0 && <Grid container item xs={12} justify='center' alignItems='center'>
        
        <Grid container item xs={10}
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid><Breadcrumbs /></Grid>
          <Grid><SupportComponent title="Help" text={HELP_INFORMATION_MOBILITY_MODELS} /></Grid>
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
              setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
              setModalSettings({...modalSettings,open:true,item,index})
            }}          
          />  
        </Grid>

        <AgentsModalContainer          
          open={modalSettings.open}
          handleClose={()=>{
            setModalSettings({...modalSettings,open:false})
          }}          
          render={Component}
        />

        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Continue'
          onClick={redirectToSusceptibilityGroupsPage}
          disabled={false}            
        />
      </Grid>}
      
      {distributionList.length == 0 && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
    </Fragment>
  )
}

export default agentsBaseHOC(AgentsMobilityGroups)
