import { Grid,Typography } from '@material-ui/core'
import React, { useState } from 'react'
import SupportComponent from '../../../components/SupportComponent'
import { 
  CompartmentalReviewConfigurationInformationContainer, 
  CompartmentalReviewConfigurationInformationFormTitle,
} from './styles'
import {HELP_INFORMATION_REVIEW_CONFIGURATION_INFORMATION_SIMULATIONS} from '../../../constants/helpInformation'
import { useCompartmentalReviewConfigurationInformationPageState } from './state'
import LoaderComponent from '../../../components/ui/Loader'
import SnackbarComponent from '@components/ui/Snackbars'
import { isEmpty } from 'lodash'
import ReviewSimulationSettings from '../../../components/CompartmentalModels/ReviewSimulationSettings'

const CompartmentalReviewConfigurationInformationPage =()=>{
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  
  const {
    executeRequestRunSimulation,
    currentSimulation,
    predefinedModelSelected,
    fileName} = useCompartmentalReviewConfigurationInformationPageState({showSnack, setShowSnack})
 
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return(
    <CompartmentalReviewConfigurationInformationContainer>
      
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_REVIEW_CONFIGURATION_INFORMATION_SIMULATIONS}/>
      </Grid>

      <CompartmentalReviewConfigurationInformationFormTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Review configurations
        </Typography>
      </CompartmentalReviewConfigurationInformationFormTitle>

      {!isEmpty(currentSimulation) && !isEmpty(predefinedModelSelected) && <ReviewSimulationSettings 
        simulation={{
          name:currentSimulation.name,
          parameter_type:currentSimulation.parameter_type,
          modelName:predefinedModelSelected.modelData.name,
          parameters_limits:currentSimulation.parameters_limits,
          state_variable_limits:currentSimulation.state_variable_limits,
          fileName:fileName
        }}
        executeRequest={executeRequestRunSimulation}
        buttonText='Execute simulation'
        showButton={true}
      />}

      {isEmpty(currentSimulation) || isEmpty(predefinedModelSelected) && <LoaderComponent
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
    </CompartmentalReviewConfigurationInformationContainer>
  )
}

export default CompartmentalReviewConfigurationInformationPage