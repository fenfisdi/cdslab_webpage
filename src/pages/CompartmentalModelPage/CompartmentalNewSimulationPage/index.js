import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import PredefinedModelsForm from '../../../components/CompartmentalModels/PredefinedModelsForm'
import SnackbarComponent from '@components/ui/Snackbars'
import { useCompartmentalNewSimulationPageState } from './state'
import { useHistory  } from 'react-router'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_NEW_SIMULATIONS} from '../../../constants/helpInformation'
import LoaderComponent from '../../../components/ui/Loader'
import Breadcrumbs from '../../../components/Breadcrumbs'

const CompartmentalNewSimulationPage = ({pathParent}) => {
  const history = useHistory()
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { predefinedModelsList, storePredefinedModelSelected  } = useCompartmentalNewSimulationPageState({ showSnack, setShowSnack })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const setPredefinedModelSelected =(values)=>{
    storePredefinedModelSelected(values)
    history.push({ pathname: `${pathParent}/chooseSimulation` })
  }

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid></Grid>
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS}/></Grid>
      </Grid>

      {predefinedModelsList && <PredefinedModelsForm
        handleClickPredefinedModels={(values) => { values && setPredefinedModelSelected(values) }}
        options={predefinedModelsList}
      />}
      {!predefinedModelsList && <LoaderComponent
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

export default CompartmentalNewSimulationPage
