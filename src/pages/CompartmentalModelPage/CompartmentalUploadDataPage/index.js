import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import UploadDataForm from '../../../components/CompartmentalModels/UploadDataForm'
import SnackbarComponent from '@components/ui/Snackbars'
import { useCompartmentalUploadDataPageState } from './state'
import LoaderComponent from '../../../components/ui/Loader'


const CompartmentalUploadDataPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  
  const{ 
    selectOptions, 
    executeRequestUploadData, 
    loadingSimulationFileUpload } = useCompartmentalUploadDataPageState({showSnack, setShowSnack})

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column" spacing={5}>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>
     
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'20px'}}>
        Choose variable to fit model
        </Typography>
      </Grid>

      {!loadingSimulationFileUpload && <Grid container item xs={12}>
        <UploadDataForm
          selectOptions={selectOptions}
          executeRequest={executeRequestUploadData}
        />
      </Grid>}

      {loadingSimulationFileUpload && <LoaderComponent
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

export default CompartmentalUploadDataPage
