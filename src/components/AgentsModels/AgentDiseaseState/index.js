import {  Grid } from '@material-ui/core'
import React, {  useState } from 'react'
import DiseaseState from './DiseaseState'
import SupportComponent from '../../SupportComponent'

export const AgentDiseaseState = ({modalSettings}) => {

  const listConfigurationDistance = []
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
          options: listConfigurationDistance != undefined ? listConfigurationDistance : [],
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
    
    <Grid container item xs={12} justify='center' alignItems='center'>
        
      <Grid container item xs={12} direction="row">
        <Grid container item xs={11} alignContent='center' justify='center' style={{color:'#006064'}}>
            Disease State {modalSettings?.item?.name}
        </Grid>
        <Grid container item xs={1}>
          <Grid><SupportComponent title="Help" text={'Contenido de ayuda'} /></Grid>
        </Grid>          
      </Grid>
        
      <DiseaseState data={jsonComponets}/>
                  

    </Grid>
    
  )
  return (
    <div>
      {diseaseStateCard()}
    </div>
  )
}
