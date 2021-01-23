import React, { useEffect } from 'react'
import Layout from './components/layouts/Layout'
import { useStore } from './store/storeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './styles/styles.css'
import { LoginPage } from './pages/LoginPage'
import { ProtectedPage } from './pages/ProtectedPage'
import { NotFoundPage } from './pages/NotFoundPage'
import PopulationSettingsPage from './pages/Simulations/PopulattionSettingsPage'
import InfectionDiseasesStatesPage from './pages/Simulations/InfectionDiseasesStatesPage'
import StatesTransitionsPage from './pages/Simulations/StatesTransitionsPage'
import RisksSettingsPage from './pages/Simulations/RisksSettingsPage'
import SimulationsPage from './pages/Simulations'
import Dashboard from './components/layouts/Dashboard'

const App = () => {
  const {
    state: {
      auth: { isAuth }
    }
  } = useStore()

  useEffect(() => {

  }, [])

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuth ? (
            <Dashboard> {children} </Dashboard>
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )}
      />
    )
  }

  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/population_settings' component={PopulationSettingsPage} />
          <Route exact path='/infection_diseases_states' component={InfectionDiseasesStatesPage} />
          <Route exact path='/states_transitions' component={StatesTransitionsPage} />
          <Route exact path='/risks_settings' component={RisksSettingsPage} />
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path='/simulations'>
            <SimulationsPage />
          </PrivateRoute>
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
