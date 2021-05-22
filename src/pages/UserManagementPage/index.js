import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import LoaderComponent from '../../components/ui/Loader'

const UserManagementPage = () => {
  const match = useRouteMatch()
  const UserManagementMainPage = React.lazy(() => import('./UserManagementMainPage'))
  const UserManagamentPage = React.lazy(() => import('./UserManagamentPage'))
 

  return (
    <>
      <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
        <Switch>
          <Route path={match.path} exact component={UserManagamentPage} />
          <Route path={`${match.path}/usersManagement`} exact component={UserManagementMainPage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default UserManagementPage
