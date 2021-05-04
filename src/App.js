import React, { Suspense } from 'react'
import Layout from './components/layouts/Layout'
import { useStore } from './store/storeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import './styles/styles.css'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

import Dashboard from './components/layouts/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'
import { MiniLoader } from './components/layouts/MiniLoader'
import ModelSettingsPage from './pages/CompartmentalModel/ModelSettings'

const App = () => {
  const {
    state: {
      session: { isAuth },
    },
  } = useStore()

  const AgentsPage = React.lazy(() => import('./pages/Agents'))
  const RegisterPage = React.lazy(() => import('./pages/Auth/RegisterPage'))
  const QRrender = React.lazy(() => import('./pages/Auth/QRPage'))
  const QRAuthentication = React.lazy(() => import('./pages/Auth/QRValidationPage'))
  const AccountRecoveryPage = React.lazy(() => import('./pages/Auth/AccountRecoveryPage'))
  const RecoveryQrBindingPage = React.lazy(() => import('./pages/Auth/QrBindingRecoveryPage'))
  const CompartmentalModelsPage = React.lazy(() => import('./pages/CompartmentalModel'))

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  // Dev enviroment
  const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuth ? (
            <Dashboard> {component} </Dashboard>
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<MiniLoader />}>
        <Router>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <PrivateRoute
                path="/agents"
                component={<AgentsPage />}
              />
              <PrivateRoute
                path="/compartmental_models"
                component={<CompartmentalModelsPage />}
              />
              <Route exact path="/ModelSettingsPage" component={ModelSettingsPage} /> 
              <Route exact path="/accountRecovery" component={AccountRecoveryPage} />
              <Route exact path="/qrBindingRecovery" component={RecoveryQrBindingPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/qr_code" component={QRrender} />
              <Route exact path="/qr_validation" component={QRAuthentication} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
