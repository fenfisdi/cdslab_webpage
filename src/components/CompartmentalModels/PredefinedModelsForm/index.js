import React from 'react'
import Typography from '@material-ui/core/Typography'
import ModelCard from '../ModelCard'
import { usePredefinedModelsState } from './state'
import { 
  CompartmentalPredefinedModelForm, 
  usePredefinedModelsStyles, 
  CompartmentalPredefinedModelFormTitle,
  CompartmentalPredefinedModelFormInput } from './styles'
import { Input } from '../../ui/Input'


const PredefinedModelsForm = ({ handleClickPredefinedModels, options=[] }) => {
  const classes = usePredefinedModelsStyles()
  const {
    setModelData,
    simulationName
  } = usePredefinedModelsState({ handleClickPredefinedModels })

  return (
    <CompartmentalPredefinedModelForm>

      <CompartmentalPredefinedModelFormTitle>
        <Typography variant="body2" component="p" className={classes.title}>
          Choose one of the predefined models
        </Typography>
      </CompartmentalPredefinedModelFormTitle>

      <CompartmentalPredefinedModelFormInput>
        <Input
          disabled={false}
          required
          fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="simulationName"
          {...simulationName}
        />
      </CompartmentalPredefinedModelFormInput>

      {options && options.length>0 && <ModelCard
        justify="center"
        alignItems="center"
        direction="column"
        options={options}
        eventEmitted={(data) => { setModelData(data) }}
        disabled={simulationName && simulationName.value ? false : true}
      />}
  
    </CompartmentalPredefinedModelForm>
  )
}

export default PredefinedModelsForm
