import React, { useEffect } from 'react'

import { useStore } from '@store/storeContext'
import Icon from '@material-ui/core/Icon'
import { SimulationContainer } from './styles'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useSimulationActions } from '@actions/simulationsActions'
import { useSessionActions } from '@actions/sessionsActions'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'


const SimulationMainPage = () => {
  const {
    state: {
      simulations: { simulations, loading },
      session: { navigation }
    },
    dispatch
  } = useStore()
  const { getSimulations, setActiveSimulation } = useSimulationActions(dispatch)
  const { setCurrenNavigation } = useSessionActions(dispatch)
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()

  useEffect(() => {
    console.log(navigation)
    updateNavigationTitle()
    loadData()
  }, [])

  const options = [
    {
      icon: 'send',
      name: 'Comparmental Models',
      indetifier: 'compar_models',
      url: `${match.path}/options`
    },
    {
      icon: 'drafts',
      name: 'Agent based models',
      indetifier: 'agent_based_models',
      url: ''
    }

  ]

  const loadData = () => {
    if (simulations.length === 0 && !loading) { getSimulations() }
  }

  const updateNavigationTitle = () => {
    if (!navigation?.current) { setCurrenNavigation('Simulations') }
  }

  return (
    <SimulationContainer>
      <ModelCard
        options={options}
        eventEmitted={(cardData) => { cardData.url && history.push(cardData.url) }}
      />
    </SimulationContainer>

  )
}

export default SimulationMainPage
