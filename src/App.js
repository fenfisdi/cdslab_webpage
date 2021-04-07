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
import RegisterPage from './pages/RegisterPage'
import QRrender from './pages/QRPage'
import QRAuthentication from './pages/QRValidationPage'
import AccountRecoveryPage from './pages/AccountRecoveryPage'

const App = () => {
  const {
    state: {
      session: { isAuth },
    },
  } = useStore()

  const SimulationsPage = React.lazy(() => import('./pages/Simulations'))

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
                path="/simulations"
                component={<SimulationsPage />}
              />
              <Route exact path="/accountRecovery" component={AccountRecoveryPage} />
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
