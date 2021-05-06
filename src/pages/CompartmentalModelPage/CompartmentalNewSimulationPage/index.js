import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import PredefinedModelsForm from '../../../components/CompartmentalModels/PredefinedModelsForm'
import SnackbarComponent from '@components/ui/Snackbars'
import { useCompartmentalNewSimulationPageState } from './state'
import { useHistory  } from 'react-router'



const CompartmentalNewSimulationPage = ({pathParent}) => {
  const history = useHistory()
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { predefinedModelsList, storePredefinedModelsSelected  } = useCompartmentalNewSimulationPageState({ showSnack, setShowSnack })
  
  
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const setPredefinedModelSelected =(values)=>{
    storePredefinedModelsSelected(values)
    history.push({ pathname: `${pathParent}/chooseSimulation` })
  }

  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">

      {predefinedModelsList && <PredefinedModelsForm
        handleClickPredefinedModels={(values) => { values && setPredefinedModelSelected(values) }}
        options={predefinedModelsList}
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
