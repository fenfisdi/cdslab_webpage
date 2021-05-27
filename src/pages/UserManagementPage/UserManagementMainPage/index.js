import React from 'react'
import {TableComponent} from '../../../components/UserManagement/ShowTableComponent/index'
import FullWidthTabs from '../../../components/Taps'
import { UserManagementPageMainContainer } from './styles'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

const UserManagementMainPage = () => {

  const isRoot = true
  
  const tabs = [
    {
      id: 1,
      label: 'Users Management',
      path:  'usersManagement',
      disabled : false,
      icon : 'fas fa-users',
      iconType: 'icon'
    },
    {
      id: 2,
      label: 'Sys Management',
      path: 'sysManagement',
      disabled : true,
      icon: 'fas fa-tools',
      iconType: 'icon'
    },
  ]
  return(
    <>
      <FullWidthTabs tabs={tabs} idTab={1} />
      <UserManagementPageMainContainer>
        <TableComponent/>
        {isRoot ? <TableComponent adminTable={isRoot}/> : <></>}
        <CompartmentalButton
          justify='center'
          alignItems='center'
          text='Save changes'
          disabled={false}
          icon='fas fa-save'
        />
      </UserManagementPageMainContainer>
    </>
  )
}
export default UserManagementMainPage