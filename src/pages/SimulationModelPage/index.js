import React, { Suspense } from 'react'
import { CompartmentalContainer } from './styles'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'

const SimulationModelPage = () => {
  const match = useRouteMatch()
  const SimulationMainPage = React.lazy(() => import('./SimulationMainPage'))


  return (
    <CompartmentalContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={SimulationMainPage} />
        </Switch>
      </Suspense>
    </CompartmentalContainer>
  )
}

export default SimulationModelPage
