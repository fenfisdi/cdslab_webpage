import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { useState } from 'react' 
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_FIXED_PARAMETERS_SIMULATIONS } from '../../../constants/helpInformation'
import { CompartmentalFixedParametersSection, CompartmentalFixedParametersTitle } from './styles'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'
import { useCompartmentalFixedParametersPageState } from './state'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'


const CompartmentalFixedParametersPage =()=>{
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  
  const { 
    fixedParametersFormFields, 
    executeRequestConfigureParameters 
  } = useCompartmentalFixedParametersPageState({showSnack, setShowSnack })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  return (
    
    <CompartmentalFixedParametersSection>
     
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_FIXED_PARAMETERS_SIMULATIONS}/>
      </Grid>

      <CompartmentalFixedParametersTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
        CompartmentalFixedParametersPage
        </Typography>
      </CompartmentalFixedParametersTitle>

      {fixedParametersFormFields && fixedParametersFormFields.length>0 && <FixedParametersFormStateVariables
        fieldsSchema={fixedParametersFormFields} 
        valuesFieldParameters={[]} 
        executeRequestConfigureStateVariables={(valuesPr)=>{
          executeRequestConfigureParameters(valuesPr)
        }}
      />}

      {fixedParametersFormFields && fixedParametersFormFields.length==0 && <LoaderComponent
        width={50}
        height={50}
        marginTop={5}
      /> }

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}
      

    </CompartmentalFixedParametersSection>
  )

}

export default CompartmentalFixedParametersPage