import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS} from '../../../constants/helpInformation'
import { useCompartmentalOptimizeParametersPageState } from './state'
import { CompartmentalOptimizeParametersSection, CompartmentalOptimizeParametersTitle } from './styles'
import SnackbarComponent from '@components/ui/Snackbars'

const CompartmentalOptimizeParametersPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { executeSelectedOption } = useCompartmentalOptimizeParametersPageState({showSnack, setShowSnack })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  
  return (
    <CompartmentalOptimizeParametersSection>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS}/>
      </Grid>
     
      <CompartmentalOptimizeParametersTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Choose data source
        </Typography>
      </CompartmentalOptimizeParametersTitle>

      <Grid container item xs={12}>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
        />
      </Grid>

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}

    </CompartmentalOptimizeParametersSection>

  )
}

export default CompartmentalOptimizeParametersPage
