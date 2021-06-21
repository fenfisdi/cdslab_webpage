import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import { AgentsDistribution } from '../../../components/AgentsModels/AgentsDistribution'
const AgentsAgeGroups = () => {
  const [componentChildren, setComponentChildren] = useState('distribution')
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

  const renderComponentChildre = () => {
    switch (componentChildren) {
    case 'distribution':
      return (<AgentsDistribution setComponentChildren={setComponentChildren} />)
    case 'constant':
      return (<h1>constant</h1>)
    case 'otro':
      return (<h1>otro</h1>) 
    default:
      return (<AgentsDistribution />)
    }
    
  } 

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
          settingsComponent={renderComponentChildre}
          setComponentChildren={setComponentChildren}
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
