import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Icon } from '@material-ui/core'

import { useCompartmentalModelsPageState } from './state'
import { useCompartmentalModelsPageStyles } from './styles'

import PredefinedModels from '../../components/CompartmentalModels/PredefinedModels'
import SimulationType from '../../components/CompartmentalModels/SimulationType'
import AdjustParameters from '../../components/CompartmentalModels/AdjustParameters'
import FixedParameters from '../../components/CompartmentalModels/FixedParameters'
import BackButton from '../../components/ui/BackButton'
import { ADJUST_PARAMETERS, MODEL_IDENTIFIERS, OPTIONS_ADJUST_PARAMETERS, OPTIONS_PREDEFINED_MODELS, OPTIONS_SIMULATION_TYPE, SIMULATION_IDENTIFIERS } from '../../constants/compartmental'

const CompartmentalModelsPage = () => {
  const classes = useCompartmentalModelsPageStyles()
  const {  
    handleClickPredefinedModels,
    handleClickSimulationType,
    handleClickAdjustParameters,
    handleClickBackButton,
    step,
    parameters
  }= useCompartmentalModelsPageState()

  const  { predefinedModel, simulationType } = parameters

  return (
    <Grid 
      xs={12}
      container 
      direction="column" 
      justify="center" 
      alignItems="center"
      spacing={2}
    >
      {step!=0 && <BackButton evenOnClick={handleClickBackButton} text="back" />}

      {step==0 && <PredefinedModels handleClickPredefinedModels={handleClickPredefinedModels} options={OPTIONS_PREDEFINED_MODELS}/>}

      {step==1 && <SimulationType handleClickSimulationType={handleClickSimulationType} options={OPTIONS_SIMULATION_TYPE}/>}

      {step==2 && <AdjustParameters handleClickAdjustParameters={handleClickAdjustParameters} options={OPTIONS_ADJUST_PARAMETERS}/>}

      {step==3 && <FixedParameters predefinedModel={predefinedModel} /> }
    </Grid>
  )
}

export default CompartmentalModelsPage
