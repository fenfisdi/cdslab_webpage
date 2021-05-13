import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MiniLoader } from '@components/layouts/MiniLoader'
import { CompartmentalModelPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'
import LoaderComponent from '../../components/ui/Loader'



const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const CompartmentalMainPage = React.lazy(() => import('./CompartmentalMainPage'))
  const CompartmentalNewSimulationPage = React.lazy(() => import('./CompartmentalNewSimulationPage'))
  const CompartmentalChooseSimulationPage = React.lazy(() => import('./CompartmentalChooseSimulationPage'))
  const CompartmentalConfigureParametersPage = React.lazy(() => import('./CompartmentalConfigureParametersPage'))
  const CompartmentalConfigureStateVariablesPage = React.lazy(() => import('./CompartmentalConfigureStateVariablesPage'))
  const CompartmentalOptimizeParametersPage = React.lazy(() => import('./CompartmentalOptimizeParametersPage'))
  

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
      <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
        <Switch>
          <Route path={match.path} exact component={CompartmentalMainPage} />
          <Route path={`${match.path}/newSimulations`} exact render={(props) => (
            <CompartmentalNewSimulationPage {...props} pathParent={match.path} />
          )} />
          <Route path={`${match.path}/chooseSimulation`} exact component={CompartmentalChooseSimulationPage} />
          <Route path={`${match.path}/configureParameters`} exact component={CompartmentalConfigureParametersPage} />          
          <Route path={`${match.path}/stateVariables`} exact component={CompartmentalConfigureStateVariablesPage} />
          <Route path={`${match.path}/optimizeParameters`} exact component={CompartmentalOptimizeParametersPage} />
        </Switch>
      </Suspense>
    </CompartmentalModelPageContainer>
  )
}

export default CompartmentalModelPage
