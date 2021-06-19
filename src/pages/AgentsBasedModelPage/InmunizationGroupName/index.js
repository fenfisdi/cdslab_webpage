import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'


const InmunizationGroupName = () => {
  
  const [loading, setLoading] = useState(false)


  const switchLoader = () => {
    setLoading(true)
  }

  const tableColumns = [
    { title: 'Immunization Group name', att: 'immunizationname', type: 'text' },
    
  ]
  const initialItems = [
    {
      immunizationname: '',      
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
          distributionType="Inmunization Group"
          columns={tableColumns}
          initialItems={initialItems}
          settingsComponent={null}
        />
      </Grid>
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={switchLoader}
        disabled={false}        
      />
      {loading && <LoaderComponent width="100p%" height={10} />}
    </>
  )
}

export default InmunizationGroupName
