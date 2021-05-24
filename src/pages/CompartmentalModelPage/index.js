import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { CompartmentalModelPageContainer, CompartmentalModelPageContainerTitle } from './styles'
import FullWidthTabs from '../../components/Taps'
import LoaderComponent from '../../components/ui/Loader'
import MyBreadcrumbs  from '../../components/Breadcrumbs'

import TitleIcon from '../../components/layouts/TitleIcon'
import lineChartFreepik from '../../assets/images/line-chart_freepik.svg'
import imgAgents from '../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../assets/images/taps/cmodels_SVG.svg'
const CompartmentalModelPage = () => {
  const match = useRouteMatch()
  const CompartmentalMainPage = React.lazy(() => import('./CompartmentalMainPage'))
  const CompartmentalNewSimulationPage = React.lazy(() => import('./CompartmentalNewSimulationPage'))
  const CompartmentalChooseSimulationPage = React.lazy(() => import('./CompartmentalChooseSimulationPage'))
  const CompartmentalConfigureParametersPage = React.lazy(() => import('./CompartmentalConfigureParametersPage'))
  const CompartmentalConfigureStateVariablesPage = React.lazy(() => import('./CompartmentalConfigureStateVariablesPage'))
  const CompartmentalOptimizeParametersPage = React.lazy(() => import('./CompartmentalOptimizeParametersPage'))
  const CompartmentalUploadDataPage = React.lazy(() => import('./CompartmentalUploadDataPage'))
  const CompartmentalReviewConfigurationInformationPage = React.lazy(() => import('./CompartmentalReviewConfigurationInformationPage'))
  const CompartmentalReviewConfigurationMessagePage = React.lazy(() => import('./CompartmentalReviewConfigurationMessagePage'))
  const CompartmentalMySimulationPage = React.lazy(() => import('./CompartmentalMySimulationPage'))
  const CompartamentalMySimulationsPreviewPage = React.lazy(() => import('./CompartamentalMySimulationsPreviewPage'))
  const CompartmentalFixedParametersPage = React.lazy(()=>import('./CompartmentalFixedParametersPage'))
  
  const tabs = [
    {
      id: 1,
      label: 'Compartmental',
      path:  match.path,
      disabled : false,
      icon : imgCompartamental,
      iconType: 'svg'
    },
    {
      id: 2,
      label: 'Agents',
      path: `${match.path}/mySimulations`,
      disabled : true,
      icon: imgAgents,
      iconType: 'svg'
    },
  ]

  return (
    <>
      <FullWidthTabs tabs={tabs} /> 
      
      <CompartmentalModelPageContainerTitle>
        <TitleIcon title={'Simulations'} icon={lineChartFreepik} width={60} height={60} colorText='#827C02' fontSize='45px' fontWeight='bold'/>
      </CompartmentalModelPageContainerTitle>
      <CompartmentalModelPageContainer>      
        <MyBreadcrumbs />  
        <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
          <Switch>
            <Route path={match.path} exact component={CompartmentalMainPage} />
            <Route path={`${match.path}/newSimulations`} exact render={(props) => (
              <CompartmentalNewSimulationPage {...props} pathParent={match.path} />
            )} />
            <Route path={`${match.path}/mySimulations`} exact render={(props) => (
              <CompartmentalMySimulationPage {...props} pathParent={match.path} />
            )} />
            <Route path={`${match.path}/preview`} exact component={CompartamentalMySimulationsPreviewPage} />
            <Route path={`${match.path}/chooseSimulation`} exact component={CompartmentalChooseSimulationPage} />
            <Route path={`${match.path}/configureParameters`} exact component={CompartmentalConfigureParametersPage} />          
            <Route path={`${match.path}/stateVariables`} exact component={CompartmentalConfigureStateVariablesPage} />
            <Route path={`${match.path}/optimizeParameters`} exact component={CompartmentalOptimizeParametersPage} />
            <Route path={`${match.path}/uploadData`} exact component={CompartmentalUploadDataPage} />
            <Route path={`${match.path}/reviewConfigurationInformation`} exact component={CompartmentalReviewConfigurationInformationPage} />
            <Route path={`${match.path}/reviewConfigurationMessage`} exact component={CompartmentalReviewConfigurationMessagePage} />
            <Route path={`${match.path}/fixedParameters`} exact component={CompartmentalFixedParametersPage} />
          </Switch>
        </Suspense>
      </CompartmentalModelPageContainer>
    </>
  )
}

export default CompartmentalModelPage
