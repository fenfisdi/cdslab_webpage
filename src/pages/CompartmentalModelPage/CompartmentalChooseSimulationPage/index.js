import React, { useState, useContext } from 'react'
import { Grid } from '@material-ui/core'
import { useCompartmentalChooseSimulationPageState } from './state'
import { OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION } from '../../../constants/compartmental'
import { HELP_INFORMATION_CHOOSE_SIMULATIONS } from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import {
  CompartmentalChooseSimulationForm,
  CompartmentalChooseSimulationSection
} from './styles'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { languageContext } from '../../../config/languageContext'

const CompartmentalChooseSimulationPage = () => {

  const {t} = useContext(languageContext)
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })

  const {
    executeSelectedOption,
    loadingSimulationFolderInformation
  } = useCompartmentalChooseSimulationPageState({ showSnack, setShowSnack })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }


  return (
    <CompartmentalChooseSimulationSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent title={t('information.title')} text={t(HELP_INFORMATION_CHOOSE_SIMULATIONS)} />
      </Grid>

      <SubtitleCommon text='Choose simulation type' />

      {!loadingSimulationFolderInformation && <CompartmentalChooseSimulationForm>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
          height='250px'
        />
      </CompartmentalChooseSimulationForm>}

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
