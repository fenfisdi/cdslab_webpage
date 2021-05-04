import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'
import { CompartmentalModelPageContainer } from './styles'


const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const CompartmentalMainPage = React.lazy(() => import('./CompartmentalMainPage'))
  const CompartmentalNewSimulationPage = React.lazy(() => import('./CompartmentalNewSimulationPage'))



  return (
    <CompartmentalModelPageContainer>
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={CompartmentalMainPage} />
          <Route path={`${match.path}/newSimulations`} exact component={CompartmentalNewSimulationPage} />
        </Switch>
      </Suspense>
    </CompartmentalModelPageContainer>
  )
}

export default CompartmentalModelPage
