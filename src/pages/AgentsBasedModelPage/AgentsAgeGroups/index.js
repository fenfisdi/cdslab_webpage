import React from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'

const AgentsAgeGroups = () => {
  
  const { redirectToMobilityGroupsPage } = useAgentsAgeGroups()
  const tableColumns = [
    { title: 'Age group name', att: 'agename', type: 'text' },
    { title: '% of population', att: 'population', type: 'number' }
  ]
  const initialItems = [
    {
      agename: '',
      population: ''
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
          distributionType="Age Group"
          columns={tableColumns}
          initialItems={initialItems}
          settingsComponent={null}
        />
      </Grid>
      
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={redirectToMobilityGroupsPage}
        disabled={false}            
      />
      
    </>
  )
}

export default AgentsAgeGroups
