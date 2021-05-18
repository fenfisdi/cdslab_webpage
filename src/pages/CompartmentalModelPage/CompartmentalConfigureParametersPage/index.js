import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalConfigureParametersPageState } from './state'
import ConfigurableParametersForm from '../../../components/CompartmentalModels/ConfigurableParametersForm'
import SnackbarComponent from '@components/ui/Snackbars'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CONFIGURE_PARAMETERS_SIMULATIONS } from '../../../constants/helpInformation'
import LoaderComponent from '../../../components/ui/Loader'
import { CompartmentalConfigureParametersSection,CompartmentalConfigureParametersTitle } from './styles'

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
    <CompartmentalConfigureParametersSection>
     
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CONFIGURE_PARAMETERS_SIMULATIONS}/>
      </Grid>

      <CompartmentalConfigureParametersTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Configure parameters values 
        </Typography>
      </CompartmentalConfigureParametersTitle>

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
      

    </CompartmentalConfigureParametersSection>

  )
}

export default CompartmentalConfigureParametersPage
