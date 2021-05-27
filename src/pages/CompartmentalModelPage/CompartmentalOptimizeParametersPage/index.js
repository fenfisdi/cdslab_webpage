import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS} from '../../../constants/helpInformation'
import { useCompartmentalOptimizeParametersPageState } from './state'
import { CompartmentalOptimizeParametersSection } from './styles'
import SnackbarComponent from '@components/ui/Snackbars'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'

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
     
    
      <SubtitleCommon text='Choose data source' />

      <Grid container item xs={12}>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
          height='250px'
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
