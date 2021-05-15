import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import UploadDataForm from '../../../components/CompartmentalModels/UploadDataForm'



const CompartmentalUploadDataPage = () => {
  
  
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column" spacing={5}>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>
     
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'20px'}}>
        Choose variable to fit model
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        <UploadDataForm/>
      </Grid>
    </Grid>

  )
}

export default CompartmentalUploadDataPage
