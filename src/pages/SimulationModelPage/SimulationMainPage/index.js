import React, { useEffect } from 'react'
import { useStore } from '@store/storeContext'

import { SimulationContainer,ContainerCard,ContainerTitle } from './styles'
import { useHistory } from 'react-router-dom'
import { useSimulationActions } from '@actions/simulationsActions'
import { useSessionActions } from '@actions/sessionsActions'

import cmodelsSvg from '../../../assets/images/cmodels_SVG.svg'
import agentsSVG from '../../../assets/images/agents_SVG.svg'

import TitleIcon from '../../../components/layouts/TitleIcon'
import MediaCard from '../../../components/CompartmentalModels/MediaCard'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { Divider } from '@material-ui/core'


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
    
    updateNavigationTitle()
    loadData()
  }, [])

  const options = [
    {
      icon: cmodelsSvg,
      name: 'Comparmental Models',
      indetifier: 'compar_models',
      url: '/compartmentalModels',
      tipo: 1,
      handleAction:(url)=>{
        history.push({ pathname: url })
      },
      description:{
        title:'COMPARTIMENTALES',
        description:`It is commonly used to analyse the effect 
        of mechanisms and parameters on the dynamic of an epidemic`
      }
    },
    {
      icon: agentsSVG,
      name: 'Agent based models',
      indetifier: 'agent_based_models',
      url: '',
      tipo: 2,
      handleAction:(url)=>{
        history.push({ pathname: url })
      },
      description:{
        title:'AGENTES',
        description:`It is commonly used to predict the incidence and mortality 
        of cases in an epidemic and to estimate the values of the parameters`
      }
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
      <ContainerTitle>
        <TitleIcon title={'Simulations'} width={60} height={60} colorText='#827C02' fontSize='45px' fontWeight='bold'/>
        <SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS}/>
        <Divider variant="middle" styles={{margin: '10px 0',
          backgroundColor: '#0F0C5A'}} />
      </ContainerTitle>
      
      <ContainerCard>
        {options.map((option,index)=>{
          return (
            <MediaCard key={index} 
              option={option}
            />
          )
        })}
      </ContainerCard>
    </SimulationContainer>
  )
}

export default SimulationMainPage
