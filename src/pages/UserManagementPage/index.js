import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { UserManagementPageContainer } from './styles'

const UserManagementPage = () => {
  const match = useRouteMatch()
  const UserManagementMainPage = React.lazy(() => import('./UserManagementMainPage'))
  const SysManagementMainPage = React.lazy(() => import('./SysManagementMainPage'))
  const UserManagamentGeneralPage = React.lazy(() => import('./UserManagamentPage'))

  return (
    <UserManagementPageContainer>
      
      <Switch>
        <Route path={match.path} exact component={UserManagamentGeneralPage} />
        <Route path={`${match.path}/usersManagement`} exact component={UserManagementMainPage} />
        <Route path={`${match.path}/SysManagement`} exact component={SysManagementMainPage} />
      </Switch>
      
    </UserManagementPageContainer>
  )
}

export default UserManagementPage
