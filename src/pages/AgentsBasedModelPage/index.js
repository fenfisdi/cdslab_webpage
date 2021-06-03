import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { AgentsModelPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'
import LoaderComponent from '../../components/ui/Loader'
import imgAgents from '../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../assets/images/taps/cmodels_SVG.svg'
import { Breadcrumbs } from '@material-ui/core'

const AgentsBasedModelPage = () => {
  const match = useRouteMatch()

  const AgentsMainPage = React.lazy(() => import('./AgentsMainPage'))
  const AgentsNewConfigurationPage = React.lazy(() => import('./AgentsNewConfigurationPage'))
  const AgentsAgeGroupsPage = React.lazy(() => import('./AgentsAgeGroups'))

  const tabs = [
    {
      id: 1,
      label: 'Compartmental',
      path:  match.path,
      disabled : true,
      icon : imgCompartamental,
      iconType: 'svg'
    },
    {
      id: 2,
      label: 'Agents',
      path: match.path,
      disabled : false,
      icon: imgAgents,
      iconType: 'svg'
    },
  ]

  return (
    <>
      <FullWidthTabs tabs={tabs} idTab={2}/>
      <AgentsModelPageContainer>  
        <Breadcrumbs  />   
        <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
          <Switch>
            <Route path={match.path} exact component={AgentsMainPage} />
            <Route path={`${match.path}/newConfiguration`} exact render={(props) => (
              <AgentsNewConfigurationPage {...props} pathParent={match.path} />
            )} />
            <Route path={`${match.path}/newConfiguration/agentsAgeGroups`} exact component={AgentsAgeGroupsPage} />
          </Switch>
        </Suspense>
      </AgentsModelPageContainer>
    </>
  )
}

export default AgentsBasedModelPage
