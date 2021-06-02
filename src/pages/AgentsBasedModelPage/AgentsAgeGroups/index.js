import React from 'react'
import { useRouteMatch } from 'react-router'
import FullWidthTabs from '../../../components/Taps'
import imgAgents from '../../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../../assets/images/taps/cmodels_SVG.svg'
import { Button, Grid } from '@material-ui/core'
import { agentAgeGroupsStyles } from './styles'
import { agentAgeGroupTitles } from './constants'
import AgentsAgeGroupsItem from '../../../components/AgentsAgeGroups/AgentsAgeGroupsItem'
import { Container } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

const AgentsAgeGroups = () => {
  const match = useRouteMatch()
  const classes = agentAgeGroupsStyles()
  const tabs = [
    {
      id: 1,
      label: 'Compartmental',
      path:  match.path,
      disabled : true,
      icon : imgCompartamental,
      iconType: 'svg'
    },
    {
      id: 2,
      label: 'Agents',
      path: `${match.path}/mySimulations`,
      disabled : false,
      icon: imgAgents,
      iconType: 'svg'
    },
  ]

  return (
    <>
      <FullWidthTabs tabs={tabs} idTab={2}/>
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
