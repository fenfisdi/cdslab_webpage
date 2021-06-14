import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import AgentsManageItems from '../../../components/AgentsModels/AgentsManageItems'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import { useInmunizationGroupName } from './state'
import { InmunizationGroupNameStyles } from './styles'

const InmunizationGroupName = () => {
  const classes = InmunizationGroupNameStyles()
  const [loading, setLoading] = useState(false)
  const [
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem
  ] = useInmunizationGroupName()

  const switchLoader = () => {
    setLoading(true)
  }

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
            title={'Immunization Group name'}
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
            onClick={switchLoader}
            disabled={false}
            icon='fas fa-save'
          />
        </div>
      </Container>
      {loading && <LoaderComponent width="100p%" height={10} />}
    </>
  )
}

export default InmunizationGroupName
