import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import {ShowTableComponent} from '../TableComponent/index'
import {showTableStyles} from './styles'


export const TableComponent=({row, configAdmin}) => {
  const classes = showTableStyles()
  const [ query, setQuery ] = useState('')
  
  return (
    
    <Grid className={classes.margin}>
      <Grid container spacing={1} justify="left" alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField 
            id="input-with-icon-grid"
            label="Search user"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </Grid>
        <ShowTableComponent rows={row} fil={query} setAdmin={configAdmin} />
      </Grid>
    </Grid>
  )
}