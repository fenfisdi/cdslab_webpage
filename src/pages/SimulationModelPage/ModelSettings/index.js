import React from 'react'

import { useCompartmentalModelsPageState } from './state'
import { Container } from './styles'

import PredefinedModelsForm from '@components/CompartmentalModels/PredefinedModelsForm'
import SimulationType from '@components/CompartmentalModels/SimulationType'
import AdjustParameters from '@components/CompartmentalModels/AdjustParameters'
import FixedParameters from '@components/CompartmentalModels/FixedParameters'
import BackButton from '@components/ui/BackButton'
import { OPTIONS_ADJUST_PARAMETERS, OPTIONS_PREDEFINED_MODELS, OPTIONS_SIMULATION_TYPE } from '@constants/compartmental'
import SnackbarComponent from '@components/ui/Snackbars'
import { isEmpty } from 'lodash'


const ModelSettingsPage = () => {

  const {
    handleClickPredefinedModels,
    handleClickSimulationType,
    handleClickAdjustParameters,
    handleClickBackButton,
    handleClickSaveConfiguredParameterValues,
    handleClickSaveConfigureStateVariables,
    handleCloseSnack,
    setParameters,
    step,
    parameters,
    loading,
    showSnack
  } = useCompartmentalModelsPageState()



  const { simulationType } = parameters

  return (
    <Container>
      {step != 0 && isEmpty(simulationType) && <BackButton evenOnClick={handleClickBackButton} text="back" />}

      {step == 0 && <PredefinedModelsForm handleClickPredefinedModels={handleClickPredefinedModels} options={OPTIONS_PREDEFINED_MODELS} />}

      {step == 1 && <SimulationType handleClickSimulationType={handleClickSimulationType} options={OPTIONS_SIMULATION_TYPE} />}

      {step == 2 && <AdjustParameters
        handleClickAdjustParameters={handleClickAdjustParameters}
        options={OPTIONS_ADJUST_PARAMETERS}
        loading={loading}
        fatherUpdateStep={handleClickBackButton}
        setParameters={setParameters}
        parameters={parameters}
      />}

      {step == 3 && <FixedParameters
        handleClickSaveConfiguredParameterValues={handleClickSaveConfiguredParameterValues}
        handleClickSaveConfigureStateVariables={handleClickSaveConfigureStateVariables}
        loading={loading}
        fatherUpdateStep={handleClickBackButton}
        setParameters={setParameters}
        parameters={parameters}
      />}

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}
    </Container>
  )
}

export default ModelSettingsPage
