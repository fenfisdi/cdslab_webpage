
import { Grid } from '@material-ui/core'
import React from 'react'
import LoaderComponent from '../../../ui/Loader'


export default function TableObjDinamic() {

  return (
    <Grid container item xs={12} direction="column" justify='center' alignItems='center'>
      <Grid container item xs={10} direction="column" justify='center' alignItems='center'>
        Modal in process of compilation this may take a few minutes...
      </Grid>
      <Grid container item xs={10} direction="column" justify='center' alignItems='center'>
        <LoaderComponent width="100px" height={50} marginTop="50px" />
      </Grid>
      
      
    </Grid>
  )
}