import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'
import { useCompartmentalConfigureStateVariablesPageState } from './state'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS } from '../../../constants/helpInformation'

const CompartmentalConfigureStateVariablesPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const {     
    currentSimulation, 
    predefinedModelSelected:{modelData}, 
    executeRequestConfigureStateVariables }= useCompartmentalConfigureStateVariablesPageState({showSnack, setShowSnack })
  
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">  

      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS}/>
      </Grid>    

      {modelData && modelData.state_variables && <FixedParametersFormStateVariables
        fieldsSchema={modelData.state_variables}
        executeRequestConfigureStateVariables={executeRequestConfigureStateVariables}
        valuesFieldParameters={currentSimulation && currentSimulation.state_variable_limits}
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

export default CompartmentalConfigureStateVariablesPage
