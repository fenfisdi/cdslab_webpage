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
import ModelSettingsPage from './pages/SimulationModelPage/ModelSettings'
import { PathProvider } from './components/PathContext'
import SysManagementState from './context/SysManagement/sysManagementState'

const App = () => {
  const {
    state: {
      session: { isAuth },
    },
  } = useStore()

  const LandingPage = React.lazy(() => import('./pages/LandingPage'))
  const AgentsPage = React.lazy(() => import('./pages/Agents'))
  const RegisterPage = React.lazy(() => import('./pages/Auth/RegisterPage'))
  const QRrender = React.lazy(() => import('./pages/Auth/QRPage'))
  const QRAuthentication = React.lazy(() => import('./pages/Auth/QRValidationPage'))
  const AccountRecoveryPage = React.lazy(() => import('./pages/Auth/AccountRecoveryPage'))
  const RecoveryQrBindingPage = React.lazy(() => import('./pages/Auth/QrBindingRecoveryPage'))
  const SimulationModelPage = React.lazy(() => import('./pages/SimulationModelPage'))
  const CompartmentalModelPage = React.lazy(() => import('./pages/CompartmentalModelPage'))
  const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
  const UserManagementPage = React.lazy(() => import('./pages/UserManagementPage'))

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
        <PathProvider>
          <Router>
            <GlobalStyles />
            <Layout>
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <PrivateRoute
                  path="/landingPage"
                  component={<LandingPage />}
                />
                <PrivateRoute
                  path="/agents"
                  component={<AgentsPage />}
                />
                <PrivateRoute
                  path="/simulationModels"
                  component={<SimulationModelPage />}
                />
                <PrivateRoute
                  path="/compartmentalModels"
                  component={<CompartmentalModelPage />}
                />
                <PrivateRoute
                  path="/profile"
                  component={<ProfilePage />}
                />
                <PrivateRoute
                  path="/management"
                  component={<SysManagementState><UserManagementPage /></SysManagementState>}
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
        </PathProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
