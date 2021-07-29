import React  from 'react'
import { Grid } from '@material-ui/core'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { HELP_INFORMATION_AGE_MODELS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../../components/SupportComponent'
import InitialPopulationTable from './children/InitialPopulationTable'
import { useInitialPopulationSetUpState } from './state'
import ActionZoneInitialPopulation from './children/ActionZone'

const InitialPopulationSetUpPage = () => {
  const {    
    fieldsToTable,
    itemsTable,
    optionsByItem,
    handlerAddOption
  } = useInitialPopulationSetUpState()
  
 
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
        xs={12}>
        <InitialPopulationTable 
          tableFields={fieldsToTable} 
          itemsTable={itemsTable}
          optionsByItem={optionsByItem}
          handlerAddOption={handlerAddOption}
          actionZone={ActionZoneInitialPopulation}
        />     
      </Grid>
      
    </Grid>
  )
}

export default InitialPopulationSetUpPage
