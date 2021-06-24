import React  from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_AGE_MODELS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'

const AgentsAgeGroups = () => {

  const { 
    handleClickSaveAgentsAgeModel,
    handleSettings,
    items,
    tableColumns,
    setItems
  } = useAgentsAgeGroups()



  return (
    <Grid container xs={12} direction='column'>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_AGE_MODELS} /></Grid>
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
          initialItems={items}
          setItems={setItems}
          handleSettings={handleSettings}
        />
      </Grid>
      
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={()=>{handleClickSaveAgentsAgeModel(items)}}
        disabled={false}            
      />
      
    </Grid>
  )
}

export default AgentsAgeGroups
