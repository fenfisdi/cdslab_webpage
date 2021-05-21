import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { UserManagementPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'
import LoaderComponent from '../../components/ui/Loader'
import imgAgents from '../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../assets/images/taps/cmodels_SVG.svg'

const UserManagementPage = () => {
  const match = useRouteMatch()
  const UserManagementMainPage = React.lazy(() => import('./UserManagementMainPage'))
  const UserManagamentPage = React.lazy(() => import('./UserManagamentPage'))
  const tabs = [
    {
      label: 'Users Management',
      path:  `${match.path}/usersManagement`,
      disabled : false,
      icon : imgCompartamental
    },
    {
      label: 'Sys Management',
      path: `${match.path}/sysManagement`,
      disabled : true,
      icon: imgAgents
    },
  ]

  return (
    <>
      <FullWidthTabs tabs={tabs} />
      
      <UserManagementPageContainer>
        <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
          <Switch>
            <Route path={match.path} exact component={UserManagamentPage} />
            <Route path={`${match.path}/usersManagement`} exact component={UserManagementMainPage} />
          </Switch>
        </Suspense>
      </UserManagementPageContainer>
    </>
  )
}

export default UserManagementPage
