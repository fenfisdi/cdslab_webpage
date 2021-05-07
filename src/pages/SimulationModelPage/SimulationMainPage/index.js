import React, { useEffect } from 'react'

import { useStore } from '@store/storeContext'

import { SimulationContainer } from './styles'
import { useHistory } from 'react-router-dom'
import { useSimulationActions } from '@actions/simulationsActions'
import { useSessionActions } from '@actions/sessionsActions'


import cmodelsSvg from '../../../assets/images/cmodels_SVG.svg'
import agentsSVG from '../../../assets/images/agents_SVG.svg'
import lineChartFreepik from '../../../assets/images/line-chart_freepik.svg'


import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import TitleIcon from '../../../components/layouts/TitleIcon'


const SimulationMainPage = () => {
  const {
    state: {
      simulations: { simulations, loading },
      session: { navigation }
    },
    dispatch
  } = useStore()
  const { getSimulations } = useSimulationActions(dispatch)
  const { setCurrenNavigation } = useSessionActions(dispatch)
  const history = useHistory()


  useEffect(() => {
    console.log(navigation)
    updateNavigationTitle()
    loadData()
  }, [])

  const options = [
    {
      icon: cmodelsSvg,
      name: 'Comparmental Models',
      indetifier: 'compar_models',
      url: '/compartmentalModels'
    },
    {
      icon: agentsSVG,
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
      <TitleIcon title={'Simulations'} icon={lineChartFreepik} width={40} height={40} colorText='#827C02' fontSize='20px' fontWeight='bold'/>
      <ModelCard
        options={options}
        eventEmitted={(cardData) => { cardData.url && history.push({ pathname: cardData.url }) }}
      />
    </SimulationContainer>

  )
}

export default SimulationMainPage