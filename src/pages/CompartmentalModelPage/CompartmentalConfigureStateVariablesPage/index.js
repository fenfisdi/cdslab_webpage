import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'
import { useCompartmentalConfigureStateVariablesPageState } from './state'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS } from '../../../constants/helpInformation'
import LoaderComponent from '../../../components/ui/Loader'
import { CompartmentalConfigureStateVariablesSection } from './styles'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import ConfigureStateVariablesHeader from './children'

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
    <CompartmentalConfigureStateVariablesSection>  

      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent text={HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS}/>
      </Grid>

      <SubtitleCommon text='Configure initial values of the state variables' />

      {modelData && modelData.state_variables && <FixedParametersFormStateVariables
        fieldParameters={modelData.state_variables}
        executeRequestConfigureStateVariables={executeRequestConfigureStateVariables}
        valuesFieldParameters={currentSimulation && currentSimulation.state_variable_limits}
        headersParams={ConfigureStateVariablesHeader}
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
    </CompartmentalConfigureStateVariablesSection>
  )
}

export default CompartmentalConfigureStateVariablesPage
