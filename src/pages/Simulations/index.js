import React, { Suspense } from 'react'
import { SimulationContainer } from './styles'
import { Route, Switch, useRouteMatch, useLocation  } from 'react-router-dom'
import { MiniLoader } from '../../components/layouts/MiniLoader'

const SimulationsPage = () => {
  let match = useRouteMatch()
  const SimulationListPage = React.lazy(() => import('./SimulationListPage'))
  const SimulationSettingPage = React.lazy(() => import('./SimulationSettingsPage'))


  return (
    <SimulationContainer>
      <Suspense fallback={<MiniLoader/>}>
        <Switch>
          <Route path={match.path} exact component={SimulationListPage}/>
          <Route path={`${match.path}/:id/settings`} exact component={SimulationSettingPage}/>
          <Route path={`${match.path}/add`} exact component={SimulationSettingPage}/>
        </Switch>
      </Suspense>
    </SimulationContainer>
  )
}

export default SimulationsPage
