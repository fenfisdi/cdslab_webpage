import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import AgentsManageItems from '../../../components/AgentsModels/AgentsManageItems'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { useAgentsMobilityGroups } from './state'
import { AgentsMobilityGroupsStyles } from './styles'

const AgentsMobilityGroups = () => {
  const classes = AgentsMobilityGroupsStyles()
  const [
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem,
    redirectToSusceptibilityGroupsPage
  ] = useAgentsMobilityGroups()

  return (
    <>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
      <Container maxWidth={'sm'}>
        <div className={classes.manageItemsContainer}>
          <AgentsManageItems
            title={'Mobility group name'}
            handleDeleteItem={handleDeleteItem}
            handleCheckItem={handleCheckItem}
            handleConfigItem={handleConfigItem}
            handleAddItem={handleAddItem}
            itemArray={[{ name: 'sd', value: 'sd', id: 'sdf' }, { name: 'sd', value: 'sd', id: 'sdf' }]}
          />
        </div>
        <div className={classes.buttonContainer}>
          <CompartmentalButton
            justify='flex-end'
            alignItems='center'
            text='Continue'
            onClick={redirectToSusceptibilityGroupsPage}
            disabled={false}
            icon='fas fa-save'
          />
        </div>
      </Container>
    </>
  )
}

export default AgentsMobilityGroups
