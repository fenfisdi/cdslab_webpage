import React, { Suspense } from 'react'
import { CompartmentalContainer } from './styles'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'

const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const SimulationListPage = React.lazy(() => import('./SimulationListPage'))
  const SimulationSettingPage = React.lazy(() => import('./SimulationSettingsPage'))
  const ModelSettingsPage = React.lazy(() => import('./ModelSettings'))

  return (
    <CompartmentalContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={SimulationListPage} />
          <Route path={`${match.path}/simulations/:id/settings`} exact component={SimulationSettingPage} />
          <Route path={`${match.path}/simulations/add`} exact component={SimulationSettingPage} />
          <Route path={`${match.path}/model/settings`} exact component={ModelSettingsPage} />
        </Switch>
      </Suspense>
    </CompartmentalContainer>
  )
}

export default CompartmentalModelPage
