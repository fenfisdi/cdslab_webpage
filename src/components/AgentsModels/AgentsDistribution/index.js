import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import DiseaseState from '../../../pages/AgentsBasedModelPage/DiseaseState'
import { DiseaseStateList } from '../../../pages/AgentsBasedModelPage/DiseaseState/state'
import AgentsDistributionCard from './AgentsDistributionCard'
import { Container, Columm, Row } from './style'

export const AgentsDistribution = ({ setModalSettings, modalSettings, setComponentChildren, distributionList }) => {
  
  const onFinishSettings = () => {
    setModalSettings({...modalSettings,open:false})
  }

  const onClose = () => {
    setModalSettings({...modalSettings,open:false})
  }


  const handleNextStep = (nexStep) =>{
    // setComponentChildren('agentsMobilityGroups')
  }
  
  // const renderCards = () => (
  //   <Container>
  //     {distributionList.map((item, i) => (
  //       <AgentsDistributionCard
  //         key={i}
  //         item={item}
  //         index={i}          
  //         handleNextStep={handleNextStep}
  //       />
  //     ))}
  //   </Container>
  // )
  // console.log(listConfigurationDistance)
  const {listDiseaseState} = DiseaseStateList(true)
  return (
    <div>
      {/* {renderCards()} */}
      <Container>
        <Row>
          <Columm>
            <DiseaseState data={listDiseaseState.data} onchange={()=>{}}/>
          </Columm>          
        </Row>
        <Row>
          <AgentsDistributionCard item='Ejemplo' handleNextStep={handleNextStep} />
        </Row>
        <Row>
          <Button onClick={() => onFinishSettings()}>Save and finish</Button>
          <Button onClick={() => onClose()}>Cancel</Button>
        </Row>
      </Container>
    </div>
  )
}
