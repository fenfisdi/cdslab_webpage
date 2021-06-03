import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { agentAgeGroupsStyles } from './styles'
import { agentAgeGroupTitles } from './constants'
import AgentsAgeGroupsItem from '../../../components/AgentsAgeGroups/AgentsAgeGroupsItem'
import { Container } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

const AgentsAgeGroups = () => {
  const classes = agentAgeGroupsStyles()

  return (
    <>
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
            onClick={''}
            disabled={false}
            icon='fas fa-save'
          />
        </div>
      </Container>
    </>
  )
}

export default AgentsAgeGroups
