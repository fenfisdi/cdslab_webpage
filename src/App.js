import React, { Suspense } from 'react'
import Layout from './components/layouts/Layout'
import { useStore } from './store/storeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './styles/styles.css'
import { LoginPage } from './pages/LoginPage'
import { ProtectedPage } from './pages/ProtectedPage'
import { NotFoundPage } from './pages/NotFoundPage'
import Dashboard from './components/layouts/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  const {
    state: {
      auth: { isAuth }
    }
  } = useStore()

  const SimulationsPage = React.lazy(() => import('./pages/Simulations'))

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
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
                state: { from: location }
              }}
            />
          )}
      />
    )
  }

  return (
    <Router>
      <GlobalStyles/>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading..</div>}>
            <Switch>
              <Route exact path='/' component={LoginPage}/>
              <PrivateRoute path='/protected'>
                <ProtectedPage/>
              </PrivateRoute>
              <PrivateRoute exact path='/simulations' component={<SimulationsPage/>}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  )
}

export default App
