import React, {Suspense}  from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { AgentsModelPageContainer } from './styles'
import FullWidthTabs from '../../components/Taps'
import imgAgents from '../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../assets/images/taps/cmodels_SVG.svg'
import LoaderComponent from '../../components/ui/Loader'

const AgentsBasedModelPage = () => {
  const match = useRouteMatch()

  const AgentsMainPage = React.lazy(() => import('./AgentsMainPage'))
  const AgentsNewConfigurationPage = React.lazy(() => import('./AgentsNewConfigurationPage'))
  const AgentsAgeGroupsPage = React.lazy(() => import('./AgentsAgeGroups'))
  const AgentsMobilityGroupsPage = React.lazy(() => import('./AgentsMobilityGroupsPage'))
  const AgentsSusceptibilityGroupsPage = React.lazy(() => import('./AgentsSusceptibilityGroupsPage'))
  const AgentsVulnerabilityGroupsPage = React.lazy(() => import('./AgentsVulnerabilityGroupsPage'))
  const AgentsDiseaseStateGroupsPage = React.lazy(()=> import('./AgentsDiseaseStateGroupsPage'))
  const AgentsConfigurationMessageExecution = React.lazy(()=> import('./AgentsConfigurationMessageExecution'))
  const QuarantineRestrictionsPage = React.lazy(()=> import('./AgentsQuarantine/QuarantineRestrictionsPage'))
  const InitialPopulationSetUpPage = React.lazy(()=>import('./AgentsInitialPopulation/InitialPopulationSetUpPage'))
  const QuarantineGroupsPage = React.lazy(()=> import('./AgentsQuarantine/QuarantineGroupsPage'))

  const tabs = [
    {
      id: 1,
      label: 'Compartmental',
      path:  match.path,
      disabled : true,
      icon : imgCompartamental,
      iconType: 'svg',
      width: 70,
      height: 40
    },
    {
      id: 2,
      label: 'Agents',
      path: match.path,
      disabled : false,
      icon: imgAgents,
      iconType: 'svg',
      width: 100,
      height: 60
    },
  ]


  return (
    <>
      <FullWidthTabs tabs={tabs} idTab={2}/>
      <AgentsModelPageContainer>          
        <Suspense fallback={<LoaderComponent  marginTop={50}/>}>
          <Switch>
            <Route path={match.path} exact component={AgentsMainPage} />
            <Route path={`${match.path}/newConfiguration`} exact render={(props) => (
              <AgentsNewConfigurationPage {...props} pathParent={match.path} />
            )} />
            <Route path={`${match.path}/agentsAgeGroups`} exact component={AgentsAgeGroupsPage} />
            <Route path={`${match.path}/agentsMobilityGroups`} exact component={AgentsMobilityGroupsPage} />
            <Route path={`${match.path}/agentsSusceptibilityGroups`} exact component={AgentsSusceptibilityGroupsPage} />
            <Route path={`${match.path}/agentsVulnerabilityGroupsPage`} exact component={AgentsVulnerabilityGroupsPage} />
            <Route path={`${match.path}/agentsDiseaseStateGroupsPage`} exact component={AgentsDiseaseStateGroupsPage} />
            <Route path={`${match.path}/agentsConfigurationMessage`} exact component={AgentsConfigurationMessageExecution} />
            <Route path={`${match.path}/quarantineRestrictionsPage`} exact component={QuarantineRestrictionsPage} />
            <Route path={`${match.path}/initialPopulationSetUpPage`} exact component={InitialPopulationSetUpPage} />
            <Route path={`${match.path}/quarantineGroupsPage`} exact component={QuarantineGroupsPage} />
          </Switch>
        </Suspense>
      </AgentsModelPageContainer>
    </>
  )
}

export default AgentsBasedModelPage
