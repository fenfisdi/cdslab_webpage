import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useAgentsModelsPageState } from './state'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_NEW_SIMULATIONS} from '../../../constants/helpInformation'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { NewConfigurationForm } from '../../../components/AgentsModels/newConfigurationForm'

const AgentsNewConfigurationPage = () => {

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { predefinedModelsList } = useAgentsModelsPageState({ showSnack, setShowSnack })

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS}/></Grid>
      </Grid>

      <Grid container item xs={12} >
        <NewConfigurationForm />
      </Grid>
    </Grid>
  )
}

export default AgentsNewConfigurationPage
