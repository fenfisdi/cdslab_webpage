import React,{ useState } from 'react'
import {TableComponent} from '../../../components/UserManagement/ShowTableComponent/index'
import FullWidthTabs from '../../../components/Taps'
import { UserManagementPageMainContainer } from './styles'
import { userManagementMainPageState } from './state'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { Container } from '@material-ui/core'
import userSvg from '../../../assets/images/management/users_color.svg'
import toolsSVG from '../../../assets/images/management/SYSManagement_SVG.svg'
import AlertCommon from '../../../components/ui/AlertCommon'
import { userManagementMessage } from './constants'

const UserManagementMainPage = () => {

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { data } = userManagementMainPageState({ showSnack, setShowSnack })


  const isRoot = true
  
  const userAdmins = data && data.filter(itemData=>{
    return itemData.role.includes('admin')
  })
  const users = data && data.filter(itemData=>{
    return itemData.role.includes('user')
  })
 

  const tab = [
    {
      id: 1,
      label: 'Users Management',
      path:  'usersManagement',
      disabled : false,
      icon: userSvg,
      iconType: 'svg',
      width: 70,
      height: 45
    },
    {
      id: 2,
      label: 'Sys Management',
      path: 'sysManagement',
      disabled : true,
      icon: toolsSVG,
      iconType: 'svg',
      width: 70,
      height: 50
    },
  ]

  return(
    <>
      <FullWidthTabs tabs={tab} idTab={1} />
      <Container maxWidth={'sm'}>
        <UserManagementPageMainContainer>
          <AlertCommon
            title={userManagementMessage.title}
            message={userManagementMessage.message}
            severity={'info'}
          />
          <TableComponent row={users}/>
          {isRoot ? <TableComponent row={userAdmins} adminTable={isRoot}/> : <></>}
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