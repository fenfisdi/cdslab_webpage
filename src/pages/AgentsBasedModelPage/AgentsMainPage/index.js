import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_AGENTS_MAIN } from '../../../constants/agents'
import { usePathBreadCrums } from '../../../helpers/usePathBreadCrums'
import { AgentslMainPageContainer,AgentsMainPageCards, useAgentsMainPageStyles } from './styles'


const AgentsMainPage = () => {
  const classes = useAgentsMainPageStyles()
  const history = useHistory()
  const {handlePathBreadCrums } = usePathBreadCrums()

  const handleEventEmitted = (cardData) => {
    console.log(cardData)
    handlePathBreadCrums(cardData.ruta,cardData.name)
    cardData.url && history.push( cardData.url )
  }
  return (
    <AgentslMainPageContainer>
      <Grid container item xs={9} justify="center" alignItems="center">
        <Paper className={classes.formBody}>
          <p>
            Agents Based Models are useful dynamical models widely used in epidemiology to describe the transmission of infectious diseases.
             They divide the population into compartments, which correspond to a state variable that indicates the number of individuals that are in a specific stage of the disease [1]. 
             They also make assumptions about the nature and speed of transmission from one compartment to another in time [2]; 
             and are useful for predicting trends and evaluating control measures [3].
            
             Referencias:...
          </p>
        </Paper>
      </Grid>

      <AgentsMainPageCards>
        <ModelCard
          options={OPTIONS_AGENTS_MAIN}
          eventEmitted={(cardData) => handleEventEmitted(cardData)}
        />
      </AgentsMainPageCards>
    </AgentslMainPageContainer>
  )
}

export default AgentsMainPage
