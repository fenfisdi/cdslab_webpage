import React from 'react'
import {TableComponent} from '../../../components/UserManagement/ShowTableComponent/index'
import FullWidthTabs from '../../../components/Taps'
import { UserManagementPageMainContainer } from './styles'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { Container } from '@material-ui/core'
import userSvg from '../../../assets/images/management/users_color.svg'
import toolsSVG from '../../../assets/images/management/tools-solid.svg'

const UserManagementMainPage = () => {
  const isRoot = true
  
  const tabs = [
    {
      id: 1,
      label: 'Users Management',
      path:  'usersManagement',
      disabled : false,
      icon: userSvg,
      iconType: 'svg'
    },
    {
      id: 2,
      label: 'Sys Management',
      path: 'sysManagement',
      disabled : true,
      icon: toolsSVG,
      iconType: 'svg'
    },
  ]

  return(
    <>
      <FullWidthTabs tabs={tabs} idTab={1} />
      <Container maxWidth={'sm'}>
        <UserManagementPageMainContainer>
          <TableComponent/>
          {isRoot ? <TableComponent adminTable={isRoot}/> : <></>}
          <CompartmentalButton
            justify='flex-end'
            alignItems='center'
            text='Save changes'
            disabled={false}
            icon='fas fa-save'
          />
        </UserManagementPageMainContainer>
      </Container>
    </>
  )
}
export default UserManagementMainPage