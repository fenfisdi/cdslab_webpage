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

const App = () => {
  const {
    state: {
      session: { isAuth },
    },
  } = useStore()

  const SimulationsPage = React.lazy(() => import('./pages/agents/Simulations'))
  const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
  const QRrender = React.lazy(() => import('./pages/QRPage'))
  const QRAuthentication = React.lazy(() => import('./pages/QRValidationPage'))
  const AccountRecoveryPage = React.lazy(() => import('./pages/AccountRecoveryPage'))
  const RecoveryQrBindingPage = React.lazy(() => import('./pages/QrBindingRecoveryPage'))
  const CompartmentalModelsPage = React.lazy(() => import('./pages/CompartmentalModelsPage'))

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
                path="/agents/simulations"
                component={<SimulationsPage />}
              />
              <PrivateRoute
                path="/compartmental_models"
                component={<CompartmentalModelsPage />}
              />
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
