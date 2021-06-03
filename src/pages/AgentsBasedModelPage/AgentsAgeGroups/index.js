import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { agentAgeGroupsStyles } from './styles'
import { agentAgeGroupTitles } from './constants'
import { Container } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { AgentsAgeGroupsItem } from '../../../components/AgentsModels/AgentsAgeGroups'

const AgentsAgeGroups = () => {
  const classes = agentAgeGroupsStyles()
  const [ redirectToMobilityGroupsPage ] = useAgentsAgeGroups()

  return (
    <>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS }/></Grid>
      </Grid>
      <Container maxWidth={'sm'}>
        <div className={classes.ageContainer}>
          <div className={classes.ageTitlesContainer}>
            <Grid container>
              <Grid item xs={6}>
                <strong>{agentAgeGroupTitles.ageGroupName}</strong>
              </Grid>
              <Grid item xs={6}>
                <strong>{agentAgeGroupTitles.population}</strong>
              </Grid>
            </Grid>
          </div>
          <div className={classes.ageItemContainer}>
            <AgentsAgeGroupsItem
              index={1}
              inputClass={classes.inputClass}
              indexClass={classes.indexClass}
              iconClass={classes.iconClass}
            />
          </div>
        </div>
        <Button
          className={classes.addButton}
        >Add</Button>
        <div className={classes.buttonContainer}>
          <CompartmentalButton
            justify='flex-end'
            alignItems='center'
            text='Continue'
            onClick={redirectToMobilityGroupsPage}
            disabled={false}
            icon='fas fa-save'
          />
        </div>
      </Container>
    </>
  )
}

export default AgentsAgeGroups
