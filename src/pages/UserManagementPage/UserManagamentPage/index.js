import React, { useEffect } from 'react'

import { useStore } from '@store/storeContext'

import { SimulationContainer, UserManagementContainer } from './styles'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSimulationActions } from '@actions/simulationsActions'
import { useSessionActions } from '@actions/sessionsActions'

import cmodelsSvg from '../../../assets/images/cmodels_SVG.svg'
import agentsSVG from '../../../assets/images/agents_SVG.svg'
import lineChartFreepik from '../../../assets/images/line-chart_freepik.svg'

import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import TitleIcon from '../../../components/layouts/TitleIcon'


const UserManagamentPage = () => {
  const match = useRouteMatch()
  const {
    state: {
      session: { navigation }
    },
    dispatch
  } = useStore()
  const { setCurrenNavigation } = useSessionActions(dispatch)
  const history = useHistory()

  useEffect(() => {
    updateNavigationTitle()
  }, [])

  const options = [
    {
      icon: cmodelsSvg,
      name: 'Users Management',
      indetifier: 'users_management',
      url: `${match.path}/usersManagement`,
      tipo: 1
    },
    {
      icon: agentsSVG,
      name: 'Sys Management',
      indetifier: 'sys_management',
      url: '',
      tipo: 2
    }
  ]

  const updateNavigationTitle = () => {
    if (!navigation?.current) { setCurrenNavigation('Management') }
  }

  return (
    <UserManagementContainer>
      <TitleIcon title={'Simulations'} icon={lineChartFreepik} width={60} height={60} colorText='#827C02' fontSize='45px' fontWeight='bold'/>
      <ModelCard
        options={options}
        eventEmitted={(cardData) => { cardData.url && history.push({ pathname: cardData.url,state: { taps: options } }) }}
      />
    </UserManagementContainer>
  )
}

export default UserManagamentPage
