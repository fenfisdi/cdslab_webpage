import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'
import { CompartmentalModelPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'



const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const CompartmentalMainPage = React.lazy(() => import('./CompartmentalMainPage'))
  const CompartmentalNewSimulationPage = React.lazy(() => import('./CompartmentalNewSimulationPage'))
  const CompartmentalChooseSimulationPage = React.lazy(() => import('./CompartmentalChooseSimulationPage'))
  const CompartmentalConfigureParametersPage = React.lazy(() => import('./CompartmentalConfigureParametersPage'))

  const tabs = [
    {
      label: 'Compartmental',
      path:  match.path,
      disabled : false,
      icon : 'cmodels_SVG'
    },
    {
      label: 'Agents',
      path: `${match.path}/newSimulations`,
      disabled : true,
      icon: 'agents_SVG'
    },
  ]

  return (
    <CompartmentalModelPageContainer>
      <FullWidthTabs tabs={tabs} />
      <Suspense fallback={<MiniLoader />}>
        <Switch>
          <Route path={match.path} exact component={CompartmentalMainPage} />
          <Route path={`${match.path}/newSimulations`} exact render={(props) => (
            <CompartmentalNewSimulationPage {...props} pathParent={match.path} />
          )} />
          <Route path={`${match.path}/chooseSimulation`} exact component={CompartmentalChooseSimulationPage} />
          <Route path={`${match.path}/configureParameters`} exact component={CompartmentalConfigureParametersPage} />
          
        </Switch>
      </Suspense>
    </CompartmentalModelPageContainer>
  )
}

export default CompartmentalModelPage
