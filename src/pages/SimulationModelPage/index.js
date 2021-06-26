import React  from 'react'
import { CompartmentalContainer } from './styles'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import whitAgentsBaseHOC from '../../utils/agentsBaseHOC'

const SimulationModelPage = () => {
  const match = useRouteMatch()
  const SimulationMainPage = React.lazy(() => import('./SimulationMainPage'))


  return (
    <CompartmentalContainer>
      
      <Switch>
        <Route path={match.path} exact component={SimulationMainPage} />
      </Switch>
      
    </CompartmentalContainer>
  )
}

export default whitAgentsBaseHOC(SimulationModelPage)
