// AgentDiseaseState

import React from 'react'
import DiseaseState from '../../../pages/AgentsBasedModelPage/DiseaseState'
import { DiseaseStateList } from '../../../pages/AgentsBasedModelPage/DiseaseState/state'
// import { Container, Columm, Row } from './style'

export const AgentDiseaseState = ({ setModalSettings, modalSettings, setComponentChildren }) => {
  
    
  const {listDiseaseState} = DiseaseStateList(true)
  const renderCards = () => (
    <DiseaseState data={listDiseaseState.data} onchange={()=>{}}/>
  )
  return (
    <div>
      <p>llego esta joda</p>
      {renderCards()}
    </div>
  )
}
