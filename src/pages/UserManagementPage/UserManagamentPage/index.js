import React, { useEffect } from 'react'

import { useStore } from '@store/storeContext'

import { UserManagementContainer, ContainerTitle } from './styles'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSessionActions } from '@actions/sessionsActions'

import userSvg from '../../../assets/images/management/users_color.svg'
import toolsSVG from '../../../assets/images/management/tools-solid.svg'
import keySVG from '../../../assets/images/management/management_color.svg'
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
      icon: userSvg,
      name: 'Users Management',
      indetifier: 'users_management',
      url: `${match.path}/usersManagement`,
      tipo: 1
    },
    {
      icon: toolsSVG,
      name: 'Sys Management',
      indetifier: 'sys_management',
      url: `${match.path}/SysManagement`,
      tipo: 2
    }
  ]

  const updateNavigationTitle = () => {
    if (!navigation?.current) { setCurrenNavigation('Management') }
  }

  return (
    <UserManagementContainer>
      <ContainerTitle>
        <TitleIcon title={'Management'} icon={keySVG}/>
      </ContainerTitle>
      <ModelCard
        options={options}
        eventEmitted={(cardData) => { cardData.url && history.push({ pathname: cardData.url,state: { taps: options } }) }}
      />
    </UserManagementContainer>
  )
}

export default UserManagamentPage
