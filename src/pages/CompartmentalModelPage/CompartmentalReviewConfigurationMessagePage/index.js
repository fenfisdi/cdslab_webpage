import { Grid, Paper, Typography } from '@material-ui/core'
import React, {useContext} from 'react'
import SupportComponent from '../../../components/SupportComponent'
import { CompartmentalReviewConfigurationMessageContainer, CompartmentalReviewConfigurationMessageFormTitle, useCompartmentalReviewConfigurationMessageStyles } from './styles'
import { HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE_SIMULATIONS } from '../../../constants/helpInformation'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import {languageContext} from '../../../config/languageContext'


const CompartmentalReviewConfigurationMessagePage = () => {

  const {t} = useContext(languageContext)
  const classes = useCompartmentalReviewConfigurationMessageStyles()
  return (
    <CompartmentalReviewConfigurationMessageContainer>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent title={t('information.title')} text={t(HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE_SIMULATIONS)} />
      </Grid>

      <SubtitleCommon text='' />
      <CompartmentalReviewConfigurationMessageFormTitle>
        <Typography variant="body2" component="p" style={{ 'fontWeight': '500', 'fontSize': '25px', 'marginBottom': '18px', 'color': '#00838F' }}>
          {t('executedSimulation.title')}
        </Typography>
      </CompartmentalReviewConfigurationMessageFormTitle>

      <Grid container item xs={8} justify="center" alignItems="center">
        <Paper className={classes.formBody}>
          <p>{t('executedSimulation.warning')}</p>
          <p>{t('executedSimulation.notification')}</p>
        </Paper>
      </Grid>
    </CompartmentalReviewConfigurationMessageContainer>
  )
}

export default CompartmentalReviewConfigurationMessagePage
