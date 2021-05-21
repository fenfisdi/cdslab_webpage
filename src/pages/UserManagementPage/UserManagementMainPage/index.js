import React from 'react'
import {TableComponent} from '../../../components/UserManagement/ShowTableComponent/index'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))
const UserManagementMainPage = () => {

  

  const classes = useStyles()
  const isRoot = true

  return(
    <>
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
    </>
  )
}
export default UserManagementMainPage