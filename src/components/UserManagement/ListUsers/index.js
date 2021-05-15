import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import ShowTableComponent from '../TableComponent/index'
import SortedTable from '../TableComponent/SortTable'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    justify: 'center',
  },
}))

export default function UserListComponent() {
  const classes = useStyles()

  return (
    
    <Grid className={classes.margin}>
      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search user" />
        </Grid>
        <SortedTable/>
      </Grid>
    </Grid>
  )
}