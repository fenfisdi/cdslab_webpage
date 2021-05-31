import React,{ useState } from 'react'
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
  const { data } = userManagementMainPageState({ showSnack, setShowSnack })


  const classes = useStyles()
  const isRoot = true
  
  const userAdmins = data && data.filter(itemData=>{
    return itemData.role.includes('admin')
  })
  const users = data && data.filter(itemData=>{
    return itemData.role.includes('user')
  })
 

  const tab = [
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
      <FullWidthTabs tabs={tab} idTab={1} />
      <UserManagementPageMainContainer>
        <TableComponent row={users}/>
        {isRoot ? <TableComponent row={userAdmins} adminTable={isRoot}/> : <></>}
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={()=>{console.log(data)}}
        >
        Save
        </Button>
      </UserManagementPageMainContainer>
    </>
  )
}

export default UserManagementMainPage