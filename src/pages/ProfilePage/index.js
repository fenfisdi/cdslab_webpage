import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { ProfilePageContainer} from './styles'
import LoaderComponent from '../../components/ui/Loader'

const ProfilePage = () => {
  const match = useRouteMatch()
  const ProfileMainPage = React.lazy(() => import('./ProfileMainPage'))
  const UpdateDataPage = React.lazy(()=>import('./UpdateDataPage'))
  const ChangePassword = React.lazy(()=>import('./ChangePassword') )
  
  return (
    <>
      <ProfilePageContainer>        
        <Suspense fallback={<LoaderComponent width={50} height={50} marginTop={5}/>}>
          <Switch>
            <Route path={match.path} exact component={ProfileMainPage}/>
            <Route path={`${match.path}/UpdateDataProfile`} exact component={UpdateDataPage} />
            <Route path={`${match.path}/ChangePassword`} exact component={ChangePassword} />
          </Switch>
        </Suspense>
      </ProfilePageContainer>
    </>
  )
}

export default ProfilePage