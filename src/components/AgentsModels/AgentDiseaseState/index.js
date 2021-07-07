import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import DiseaseState from '../../../pages/AgentsBasedModelPage/DiseaseState'
import { DiseaseStateList } from '../../../pages/AgentsBasedModelPage/DiseaseState/state'
import SupportComponent from '../../SupportComponent'
import DistributionsSettings from './DistributionsSettings'
import SettingsComponent from './SettingsComponent'

export const AgentDiseaseState = () => {
  const initialItemsDistribution = [
    {
      name: 'Diagnosis',
      description:
        'Tooltips Diagnosis',
      state:''
    },
    {
      name: 'Quarentine',
      description: 'Tooltips Quarentine',
      state: ''
    },
    {
      name: 'Hospitalization',
      description: 'Tooltips Hospitalization',
      state: ''
    }
  ]
  const {listDiseaseState} = DiseaseStateList(true)
  const [valueChangeSelect, setValueChangeSelect] = useState(0)
  const [viewState, setViewState] = useState(false)
  const [valueSlider, setValueSlider] = useState(0)
  const [valueText, setValueText] = useState()
  const [canIsInfected, setCanInfected] = useState(false)
  const [isInfected, setInfected] = useState(false)
  
  const handelChangeSelect = (e, value)=>{
    setValueChangeSelect(value.props.value)
  }
  const spreadChecked = (e, value) => {
    setViewState(value)
  }
  const onChangeText=(e, value)=>{
    setValueText(value)
  }
  const onCahngeSlider = (e, value)=>{
    setValueSlider(value)
  }
  const canGetInfected =(e, value)=>{
    setCanInfected(value)
  }
  const onchageIsInfected = (e, value)=>{
    setInfected(value)
  }
  const jsonComponets = [
    ['Parameter', 'Value'],
    [
      [
        {
          type: 'label', content: 'Can get infected?', show: true
        },
        {
          type: 'check', value: canIsInfected, checked: canIsInfected, show: true, handleChange:canGetInfected
        }
      ], [
        {
          type: 'label', show: true, content: 'Is infected?'
        },{
          type: 'check', value: isInfected, checked: isInfected, show: true, handleChange:onchageIsInfected
        }
      ], [
        {
          type: 'label', show: true, content: 'Can spread?'
        },
        {
          type: 'check', value: viewState, checked: viewState, handleChange: spreadChecked        
        }
      ], [
        {
          type: 'label-valid', content: 'Spread Radius', value: false, show: viewState,
        }, {
          type: 'input', placeholder: 'Spread Radius', value: valueText, show: viewState,
          handleOnChange: onChangeText
        }, {
          type: 'select',
          show: viewState,
          name: 'distance',
          value: valueChangeSelect,
          title: 'Distance Unit',
          options: listDiseaseState.data != undefined ? listDiseaseState.data : [],
          placeholder:'Distance Unit',
          handleOnChange: handelChangeSelect
        }
      ], [
        {
          type: 'label-valid',
          content: 'Spread probability',
          show: viewState
        }, {
          type: 'slider',
          placeholder: 'value',
          value: valueSlider,
          show: viewState,
          min:0,
          max:1,
          step:0.001,
          handleOnChange: onCahngeSlider
        }
      ]
    ]
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
          <Grid>
            <DiseaseState data={jsonComponets}/>
          </Grid>
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
