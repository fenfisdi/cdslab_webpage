// AgentDiseaseState

import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import DiseaseState from '../../../pages/AgentsBasedModelPage/DiseaseState'
import { DiseaseStateList } from '../../../pages/AgentsBasedModelPage/DiseaseState/state'
import SupportComponent from '../../SupportComponent'
import DistributionsSettings from './DistributionsSettings'
import SettingsComponent from './SettingsComponent'

export const AgentDiseaseState = () => {
  const {listDiseaseState} = DiseaseStateList(true)
  const initialItemsDistribution = [
    {
      name: 'Diagnosis',
      description:
        'this is a dummy description for Diagnosis, this is a dummy description for Diagnosis, this is a dummy description for Diagnosis',
      state:''
    },
    {
      name: 'Quarentine',
      description: 'this is a dummy description for Quarentine',
      state: ''
    },
    {
      name: 'Hospitalization',
      description: 'this is a dummy description for Hospitalization',
      state: ''
    }
  ]
  const diseaseStateCard = () => (
    <Fragment>
      <Grid container item xs={12} justify={'center'} alignItems='center'>
        <Grid container item xs={12} direction="row">
          <Grid contairner item xs={11} alignContent='center'><Paper>Disease State Name</Paper></Grid>
          <Grid contairner item xs={1}>
            <Grid><SupportComponent title="Help" text={'Contenido de ayuda'} /></Grid>
          </Grid>          
        </Grid>

        <Grid container item xs={12} direction="row">
          <Grid><DiseaseState data={listDiseaseState.data} onchange={()=>{}}/></Grid>
        </Grid>

        <Grid container item xs={12} direction="row">

        </Grid>

        <Grid container item xs={12} direction="row">
          <DistributionsSettings
            distributionType="Disease State"
            initialItems={initialItemsDistribution}
            settingsComponent={SettingsComponent}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
  return (
    <div>
      {diseaseStateCard()}
    </div>
  )
}
