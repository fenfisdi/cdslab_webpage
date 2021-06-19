import { Grid } from '@material-ui/core'
import React from 'react'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { useAgentsMobilityGroups } from './state'

const AgentsMobilityGroups = () => {
  const {
    redirectToSusceptibilityGroupsPage
  }= useAgentsMobilityGroups()
  const tableColumns = [
    { title: 'Mobility group name', att: 'mobilityname', type: 'text' },
    
  ]
  const initialItems = [
    {
      mobilityname: '',      
    }
  ]
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
          distributionType="Mobility Group"
          columns={tableColumns}
          initialItems={initialItems}
          settingsComponent={null}
        />
      </Grid>
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
