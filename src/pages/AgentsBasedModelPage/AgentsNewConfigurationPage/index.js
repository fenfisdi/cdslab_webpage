import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { NewConfigurationForm } from '../../../components/AgentsModels/newConfigurationForm'
import { useAgentsModelsPageState } from './state'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'

const AgentsNewConfigurationPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { listConfigurationDistance,listConfigurationTime,eventEmitter,loading  } = useAgentsModelsPageState({showSnack,setShowSnack})
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  return (
    <div>
      {loading ?
        (<LoaderComponent
          width={50}
          height={50}
          marginTop={5}
        />)
        :
        (
          <Grid container item xs={12} justify="center" alignItems="center" direction="column">
            <Grid container item xs={12}
              direction="row"
              justify="space-between"
              alignItems="center">
              <Grid><Breadcrumbs /></Grid>
              <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
            </Grid>

            <Grid container item xs={12} >
              <NewConfigurationForm
                listConfigurationDistance = {listConfigurationDistance}
                listConfigurationTime = {listConfigurationTime}
                eventEmitter={(formValues) => { eventEmitter(formValues) }}
              />
              {showSnack && showSnack.show && <SnackbarComponent
                snackDuration={3500}
                configData={showSnack}
                handleCloseSnack={handleCloseSnack}
                successMessage={showSnack.successMessage}
                errorMessage={showSnack.errorMessage} />}
            </Grid>
          </Grid>
        )
      }
    </div>
  )
}

export default AgentsNewConfigurationPage
