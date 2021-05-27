import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import UploadDataForm from '../../../components/CompartmentalModels/UploadDataForm'
import SnackbarComponent from '@components/ui/Snackbars'
import { useCompartmentalUploadDataPageState } from './state'
import LoaderComponent from '../../../components/ui/Loader'
import { CompartmentalUploadDataSection, CompartmentalUploadDataTitle } from './styles'


const CompartmentalUploadDataPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })

  const {
    stateVariables,
    executeRequestUploadData,
    loadingSimulationFileUpload } = useCompartmentalUploadDataPageState({showSnack, setShowSnack})

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const optionListDTO =(options)=>{
    const arrayStateDto = []
    options.map((state)=>{
      if(state.can_fit){
        const stateObject = {}
        stateObject.label = state.label.toLowerCase()
        stateObject.name  = state.name
        stateObject.value = state.label.toLowerCase()
        arrayStateDto.push(stateObject)
      }
    })
    return arrayStateDto
  }

  return (
    <CompartmentalUploadDataSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>

      <CompartmentalUploadDataTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
        Choose variable to fit model
        </Typography>
      </CompartmentalUploadDataTitle>

      {!loadingSimulationFileUpload && stateVariables.length>0 && <Grid container item xs={12}>
        <UploadDataForm
          selectOptions={optionListDTO(stateVariables)}
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
    </CompartmentalUploadDataSection>
  )
}

export default CompartmentalUploadDataPage
