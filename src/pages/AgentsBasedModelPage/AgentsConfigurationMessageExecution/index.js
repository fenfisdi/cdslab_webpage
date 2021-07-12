import { Grid, Paper, Typography } from '@material-ui/core'
import React, {useContext} from 'react'
import SupportComponent from '../../../components/SupportComponent'
import { AgentsConfigurationMessageExecutionContainer, 
  AgentsConfigurationMessageExecutionFormTitle, 
  AgentsConfigurationMessageExecutionStyles 
} from './styles'
import { HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE } from '../../../constants/helpInformation'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import {languageContext} from '../../../config/languageContext'


const AgentsConfigurationMessageExecution = () => {

  const {t} = useContext(languageContext)
  const classes = AgentsConfigurationMessageExecutionStyles()
  return (
    <AgentsConfigurationMessageExecutionContainer>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent title={t('information.title')} text={t(HELP_INFORMATION_REVIEW_CONFIGURATION_MESSAGE)} />
      </Grid>

      <SubtitleCommon text='' />
      <AgentsConfigurationMessageExecutionFormTitle>
        <Typography variant="body2" component="p" style={{ 'fontWeight': '500', 'fontSize': '25px', 'marginBottom': '18px', 'color': '#00838F' }}>
          {t('executedConfiguration.title')}
        </Typography>
      </AgentsConfigurationMessageExecutionFormTitle>

      <Grid container item xs={8} justify="center" alignItems="center">
        <Paper className={classes.formBody}>
          <p>{t('executedConfiguration.warning')}</p>
          <p>{t('executedConfiguration.notification')}</p>
        </Paper>
      </Grid>
    </AgentsConfigurationMessageExecutionContainer>
  )
}

export default AgentsConfigurationMessageExecution
