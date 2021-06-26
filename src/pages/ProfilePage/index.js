import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { ProfilePageContainer} from './styles'

const ProfilePage = () => {
  const match = useRouteMatch()
  const ProfileMainPage = React.lazy(() => import('./ProfileMainPage'))
  const UpdateDataPage = React.lazy(()=>import('./UpdateDataPage'))
  const ChangePassword = React.lazy(()=>import('./ChangePassword'))
  const ChangeQRlink = React.lazy(()=>import('./UpdateQRlink'))
  
  return (
    <>
      <ProfilePageContainer>        
        
        <Switch>
          <Route path={match.path} exact component={ProfileMainPage}/>
          <Route path={`${match.path}/UpdateDataProfile`} exact component={UpdateDataPage} />
          <Route path={`${match.path}/ChangePassword`} exact component={ChangePassword} />
          <Route path={`${match.path}/UpdateQRlink`} exact component={ChangeQRlink} />
        </Switch>
        
      </ProfilePageContainer>
    </>
  )
}

export default ProfilePage