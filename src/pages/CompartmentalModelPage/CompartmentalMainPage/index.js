import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_MAIN } from '../../../constants/compartmental'
import { usePathBreadCrums } from '../../../helpers'
import { useCompartmentalMainPageStyles, CompartmentalMainPageContainer,CompartmentalMainPageCards } from './styles'

const CompartmentalMainPage = () => {
  const classes = useCompartmentalMainPageStyles()
  const history = useHistory()
  const {handlePathBreadCrums } = usePathBreadCrums()

  const handleEventEmitted = (cardData) => {
    handlePathBreadCrums(cardData.ruta,cardData.name)
    cardData.url && history.push( cardData.url )
  }
  return (
    <CompartmentalMainPageContainer>
      <Grid container item xs={9} justify="center" alignItems="center">
        <Paper className={classes.formBody}>
          <p>
            Compartmental models are useful dynamical models widely used in epidemiology to describe the transmission of infectious diseases.
             They divide the population into compartments, which correspond to a state variable that indicates the number of individuals that are in a specific stage of the disease [1]. 
             They also make assumptions about the nature and speed of transmission from one compartment to another in time [2]; 
             and are useful for predicting trends and evaluating control measures [3].
            
             Referencias:...
          </p>
        </Paper>
      </Grid>

      <CompartmentalMainPageCards>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_MAIN}
          eventEmitted={(cardData) => handleEventEmitted(cardData)}
        />
      </CompartmentalMainPageCards>
    </CompartmentalMainPageContainer>
  )
}

export default CompartmentalMainPage
