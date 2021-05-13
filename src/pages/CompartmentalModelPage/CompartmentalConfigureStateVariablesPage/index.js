import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'

const CompartmentalConfigureStateVariablesPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
 
  

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">      

      <FixedParametersFormStateVariables
        fieldsSchema={[
          {
            label:'S',
            unit:'Unidad S',
            name:'S'
          },
          {
            label:'A',
            unit:'Unidad a',
            name:'A'
          }
        ]}
      />

      

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
