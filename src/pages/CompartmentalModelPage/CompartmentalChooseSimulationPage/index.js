import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalChooseSimulationPageState } from './state'
import { OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION } from '../../../constants/compartmental'
import {HELP_INFORMATION_CHOOSE_SIMULATIONS} from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { CompartmentalChooseSimulationSection, CompartmentalChooseSimulatioFormTitle } from './styles'

const CompartmentalChooseSimulationPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const {executeSelectedOption,loadingSimulationFolderInformation } = useCompartmentalChooseSimulationPageState({showSnack, setShowSnack })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  return (
    <CompartmentalChooseSimulationSection>
      
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CHOOSE_SIMULATIONS}/>
      </Grid>

      <CompartmentalChooseSimulatioFormTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Choose simulation type
        </Typography>
      </CompartmentalChooseSimulatioFormTitle>

      {!loadingSimulationFolderInformation && <Grid container item xs={12}>
        <ModelCard
          ruta="chooseSimulation"
          options={OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
        />
      </Grid>}

      {loadingSimulationFolderInformation && <LoaderComponent
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
    </CompartmentalChooseSimulationSection>
  )
}

export default CompartmentalChooseSimulationPage
