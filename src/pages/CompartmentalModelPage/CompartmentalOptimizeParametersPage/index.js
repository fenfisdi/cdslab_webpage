import React, { useState, useContext } from 'react'
import { Grid } from '@material-ui/core'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS } from '../../../constants/helpInformation'
import { useCompartmentalOptimizeParametersPageState } from './state'
import { CompartmentalOptimizeParametersContainerModelCard, CompartmentalOptimizeParametersSection } from './styles'
import SnackbarComponent from '@components/ui/Snackbars'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import {languageContext} from '../../../config/languageContext'

const CompartmentalOptimizeParametersPage = () => {

  const {t} = useContext(languageContext)
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { executeSelectedOption } = useCompartmentalOptimizeParametersPageState({ showSnack, setShowSnack })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <CompartmentalOptimizeParametersSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent title={t('information.title')} text={t(HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS)} />
      </Grid>


      <SubtitleCommon text={t('uploadDataPage.dataSource')}/>

      <CompartmentalOptimizeParametersContainerModelCard>
        <Grid container item xs={12}>
          <ModelCard
            options={OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION}
            direction="column"
            eventEmitted={executeSelectedOption}
            height='300px'
          />
        </Grid>
      </CompartmentalOptimizeParametersContainerModelCard>

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
