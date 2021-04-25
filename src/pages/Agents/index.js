import React, { Suspense } from 'react'
import { AgentsContainer } from './styles'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'

const AgentsPage = () => {
  const match = useRouteMatch()
  const SimulationListPage = React.lazy(() => import('./SimulationListPage'))
  const SimulationSettingPage = React.lazy(() => import('./SimulationSettingsPage'))

  return (
    <AgentsContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={SimulationListPage} />
          <Route path={`${match.path}/simulations/:id/settings`} exact component={SimulationSettingPage} />
          <Route path={`${match.path}/simulations/add`} exact component={SimulationSettingPage} />
          <Route path={`${match.path}/settings`} exact component={SimulationSettingPage} />
        </Switch>
      </Suspense>
    </AgentsContainer>
  )
}

export default AgentsPage
