import React, { Suspense } from 'react'
import { SimulationContainer } from './styles'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

const SimulationsPage = () => {
  let match = useRouteMatch();
  const SimulationListPage = React.lazy(() => import('./SimulationListPage'))
  const SimulationSettingPage = React.lazy(() => import('./SimulationSettingsPage'))

  return (
    <SimulationContainer>

      <Switch>
        <Route path={match.path} >
          <SimulationListPage />
        </Route>

        <Route path={`${match.path}/settings`} >
          <SimulationSettingPage />
        </Route>
      </Switch>

    </SimulationContainer>
  )
}

export default SimulationsPage
