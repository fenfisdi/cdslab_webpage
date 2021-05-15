import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalConfigureParametersPageState } from './state'
import ConfigurableParametersForm from '../../../components/CompartmentalModels/ConfigurableParametersForm'
import SnackbarComponent from '@components/ui/Snackbars'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CONFIGURE_PARAMETERS_SIMULATIONS } from '../../../constants/helpInformation'
import LoaderComponent from '../../../components/ui/Loader'

const CompartmentalConfigureParametersPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { 
    currentSimulation, 
    predefinedModelSelected:{modelData}, 
    executeRequestConfigureParameters } = useCompartmentalConfigureParametersPageState({showSnack, setShowSnack })
  

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid container item xs={11} justify="center" alignItems="center" direction="column">
     
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CONFIGURE_PARAMETERS_SIMULATIONS}/>
      </Grid>

      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p">
        Configure parameters values sad
        </Typography>
      </Grid>

      {modelData && modelData.parameters && <ConfigurableParametersForm
        parameters={modelData.parameters}
        handleRequestAction={executeRequestConfigureParameters}
        valuesFieldParameters={currentSimulation && currentSimulation.parameters_limits}
      />}

      {!modelData  && <LoaderComponent
        width={50}
        height={50}
        marginTop={5}
      />}

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}
      

    </Grid>

  )
}

export default CompartmentalConfigureParametersPage
