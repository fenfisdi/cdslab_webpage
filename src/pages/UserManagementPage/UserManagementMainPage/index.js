import React,{ useState, useEffect } from 'react'
import {TableComponent} from '../../../components/UserManagement/ShowTableComponent/index'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import FullWidthTabs from '../../../components/Taps'
import { UserManagementPageMainContainer } from './styles'
import { userManagementMainPageState } from './state'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))
const UserManagementMainPage = () => {

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { getUsersListData } = userManagementMainPageState({ showSnack, setShowSnack })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const classes = useStyles()
  const isRoot = true
  
  const tabs = [
    {
      id: 1,
      label: 'Users Management',
      path:  'usersManagement',
      disabled : false,
      icon : 'fas fa-users',
      iconType: 'icon'
    },
    {
      id: 2,
      label: 'Sys Management',
      path: 'sysManagement',
      disabled : true,
      icon: 'fas fa-tools',
      iconType: 'icon'
    },
  ]

  return(
    <>
      <FullWidthTabs tabs={tabs} idTab={1} />
      <UserManagementPageMainContainer>
        <TableComponent/>
        {isRoot ? <TableComponent adminTable={isRoot}/> : <></>}
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
        Save
        </Button>
      </UserManagementPageMainContainer>
    </>
  )
}

export default UserManagementMainPage