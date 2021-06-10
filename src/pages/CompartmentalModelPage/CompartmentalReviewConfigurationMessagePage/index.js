import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import SupportComponent from '../../../components/SupportComponent'
import {CompartmentalReviewConfigurationMessageContainer,CompartmentalReviewConfigurationMessageFormTitle,useCompartmentalReviewConfigurationMessageStyles} from './styles'
import {HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE_SIMULATIONS} from '../../../constants/helpInformation'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
 

const CompartmentalReviewConfigurationMessagePage=()=>{
  const classes = useCompartmentalReviewConfigurationMessageStyles()
  return (
    <CompartmentalReviewConfigurationMessageContainer>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent text={HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE_SIMULATIONS}/>
      </Grid>
      
      <SubtitleCommon text='' />
      <CompartmentalReviewConfigurationMessageFormTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'25px', 'marginBottom':'18px','color':'#00838F'}}>
          Your simulation is being processed
        </Typography>
      </CompartmentalReviewConfigurationMessageFormTitle>
     
      <Grid container item xs={8} justify="center" alignItems="center">
        <Paper className={classes.formBody}>
          <p>Simulations can take several minutes.</p>
          <p>
            You’ll be notified via e-mail when everythings is done. 
            After you get notified, visit `My Simulations` to obtain an overview of the results and download the complete dataset.
          </p>
        </Paper>
      </Grid>
    </CompartmentalReviewConfigurationMessageContainer>
  )
}

export default CompartmentalReviewConfigurationMessagePage
