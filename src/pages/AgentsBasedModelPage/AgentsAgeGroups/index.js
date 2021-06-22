import React  from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'

const AgentsAgeGroups = () => {
  
  const { redirectToMobilityGroupsPage,initialItems,setInitialItems } = useAgentsAgeGroups()
 

  const tableColumns = [
    {
      title: 'Name',
      att: 'name',
      type: 'text',
      inputProps: { fullWidth: true } // use fullWidth when you have just 1 column
    },
    {
      title: 'Percentage',
      att: 'percentage',
      type: 'slider',
      inputProps: { min: 0, max: 1, step: 0.001 }// Defatul min:0 and max:100
    }
  ]


  return (
    <Grid container xs={12} direction='column'>
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
          showConfig={false}
          showCheck={false}
          distributionType="Age Group"
          columns={tableColumns}
          initialItems={initialItems}
          setInitialItems={setInitialItems}
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
      
    </Grid>
  )
}

export default AgentsAgeGroups
