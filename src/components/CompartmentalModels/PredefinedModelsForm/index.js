import React, {useContext} from 'react'
import Typography from '@material-ui/core/Typography'
import ModelCard from '../ModelCard'
import { usePredefinedModelsState } from './state'
import { 
  CompartmentalPredefinedModelForm, 
  usePredefinedModelsStyles, 
  CompartmentalPredefinedModelFormTitle,
  CompartmentalPredefinedModelFormInput } from './styles'
import { Input } from '../../ui/Input'
import { usePathBreadCrums } from '../../../helpers/usePathBreadCrums'
import {languageContext} from '../../../config/languageContext'


const PredefinedModelsForm = ({ handleClickPredefinedModels, options=[] }) => {
  
  const {t} = useContext(languageContext)
  const classes = usePredefinedModelsStyles()
  const {handlePathBreadCrums } = usePathBreadCrums()
  const {
    setModelData,
    simulationName
  } = usePredefinedModelsState({ handleClickPredefinedModels })

  const handleEventEmitted = (cardData) => {
    handlePathBreadCrums('chooseSimulation','Choose Simulation')
    setModelData(cardData) 
  }
  return (
    <CompartmentalPredefinedModelForm>
      <CompartmentalPredefinedModelFormInput>
        <span><strong>{t('chooseSimulation.title')}</strong></span>
        <Input
          disabled={false}
          required
          // fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="simulationName"
          className={classes.Input}
          {...simulationName}
        />
      </CompartmentalPredefinedModelFormInput>
      <CompartmentalPredefinedModelFormTitle>
        <Typography variant="body2" component="p" className={classes.title}>
          {t('chooseSimulation.instruction')}
        </Typography>
      </CompartmentalPredefinedModelFormTitle>

      {options && options.length>0 && <ModelCard
        justify="center"
        alignItems="center"
        direction="column"
        options={options}
        eventEmitted={(cardData) => handleEventEmitted(cardData)}
        disabled={simulationName && simulationName.value ? false : true}
      />}
  
    </CompartmentalPredefinedModelForm>
  )
}

export default PredefinedModelsForm
