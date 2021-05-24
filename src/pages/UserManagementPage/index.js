import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { UserManagementPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'
import LoaderComponent from '../../components/ui/Loader'
import SysManagementState from '../../context/SysManagement/sysManagementState'

const UserManagementPage = () => {
  const match = useRouteMatch()
  const UserManagementMainPage = React.lazy(() => import('./UserManagementMainPage'))
  const SysManagementMainPage = React.lazy(() => import('./SysManagementMainPage'))
  
  const tabs = [
    {
      label: 'Users Management',
      path:  match.path,
      disabled : false,
      icon : 'cmodels_SVG'
    },
    {
      label: 'Sys Management',
      path: `${match.path}/SysManagement`,
      disabled : false,
      icon: 'agents_SVG'
    },
  ]

  return (
    <>
      <FullWidthTabs tabs={tabs} />
      
      <UserManagementPageContainer>
        <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
          <Switch>
            <Route path={match.path} exact component={UserManagementMainPage} />
            <Route path={`${match.path}/SysManagement`} exact component={() => (<SysManagementState><SysManagementMainPage/></SysManagementState>)} />
          </Switch>
        </Suspense>
      </UserManagementPageContainer>
    </>
  )
}

export default UserManagementPage
