import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_FIXED_PARAMETERS_SIMULATIONS } from '../../../constants/helpInformation'
import { CompartmentalFixedParametersSection } from './styles'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'
import { useCompartmentalFixedParametersPageState } from './state'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FixedHeaderParameters from './children'

const CompartmentalFixedParametersPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })

  const {
    currentSimulation,
    fixedParametersFormFields,
    executeRequestConfigureParametersFixed
  } = useCompartmentalFixedParametersPageState({ showSnack, setShowSnack })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  return (

    <CompartmentalFixedParametersSection>

      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent title="Help" text={HELP_INFORMATION_FIXED_PARAMETERS_SIMULATIONS} />
      </Grid>


      <SubtitleCommon text='Configuration of fixed parameters' />

      {fixedParametersFormFields && fixedParametersFormFields.length > 0 && <FixedParametersFormStateVariables
        fieldParameters={fixedParametersFormFields}
        valuesFieldParameters={currentSimulation.parameters_limits}
        executeRequestConfigureStateVariables={(valuesPr) => {
          executeRequestConfigureParametersFixed(valuesPr)
        }}
        headersParams={FixedHeaderParameters}
      />}

      {fixedParametersFormFields && fixedParametersFormFields.length == 0 && <LoaderComponent
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


    </CompartmentalFixedParametersSection>
  )

}

export default CompartmentalFixedParametersPage