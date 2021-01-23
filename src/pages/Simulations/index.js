import React from 'react'
import { SimulationContainer } from './styles'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import SimulationListPage from './SimulationListPage'
import SimulationSettingPage from './SimulationSettingsPage'

const SimulationsPage = () => {
  let match = useRouteMatch();

  return (
    <SimulationContainer>
      <Switch>
        <Route path={match.path} exact>
          <SimulationListPage/>
        </Route>
        <Route path={`${match.path}/:id`} exact>
          <SimulationSettingPage />
        </Route>
      </Switch>
    </SimulationContainer>
  )
}

export default SimulationsPage
