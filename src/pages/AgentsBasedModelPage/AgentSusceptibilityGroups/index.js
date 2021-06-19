import { Grid } from '@material-ui/core'
import React from 'react'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { useAgentSusceptibilityGroups } from './state'


const AgentSusceptibilityGroups = () => {
  
  const {    
    redirectToInmunizationGroupNamePage
  } = useAgentSusceptibilityGroups()

  const tableColumns = [
    { title: 'Susceptibility group name', att: 'suscepname', type: 'text' },
    
  ]
  const initialItems = [
    {
      suscepname: '',      
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
          distributionType="Susceptibility Group"
          columns={tableColumns}
          initialItems={initialItems}
          settingsComponent={null}
        />
      </Grid>
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={redirectToInmunizationGroupNamePage}
        disabled={false}        
      />
    </>
  )
}

export default AgentSusceptibilityGroups
