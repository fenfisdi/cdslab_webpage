import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'
import { CompartmentalModelPageContainer } from './styles'



const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const CompartmentalMainPage = React.lazy(() => import('./CompartmentalMainPage'))
  const CompartmentalNewSimulationPage = React.lazy(() => import('./CompartmentalNewSimulationPage'))
  const CompartmentalChooseSimulationPage = React.lazy(() => import('./CompartmentalChooseSimulationPage'))



  return (
    <CompartmentalModelPageContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={CompartmentalMainPage} />
          <Route path={`${match.path}/newSimulations`} exact render={(props) => (
            <CompartmentalNewSimulationPage {...props} pathParent={match.path} />
          )} />
          <Route path={`${match.path}/chooseSimulation`} exact component={CompartmentalChooseSimulationPage} />
        </Switch>
      </Suspense>
    </CompartmentalModelPageContainer>
  )
}

export default CompartmentalModelPage
