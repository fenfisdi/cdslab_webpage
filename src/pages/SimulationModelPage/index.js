import React, { Suspense } from 'react'
import { CompartmentalContainer } from './styles'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'

const SimulationModelPage = () => {
  const match = useRouteMatch()
  const SimulationMainPage = React.lazy(() => import('./SimulationMainPage'))
  const SimulationSettingPage = React.lazy(() => import('./SimulationSettingsPage'))


  return (
    <CompartmentalContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={SimulationMainPage} />
          <Route path={`${match.path}/options`} exact component={SimulationSettingPage} />

        </Switch>
      </Suspense>
    </CompartmentalContainer>
  )
}

export default SimulationModelPage
