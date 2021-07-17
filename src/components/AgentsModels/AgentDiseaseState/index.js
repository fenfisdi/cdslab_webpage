import { Grid } from '@material-ui/core'
import React from 'react'
import DiseaseState from './DiseaseState'
import SupportComponent from '../../SupportComponent'
import DistributionsSettings from './DistributionsSettings'
import CompartmentalButton from '../../CompartmentalModels/CompartmentalButton'

export const AgentDiseaseState = ({modalSettings,fieldsToDiseaseModal,diseaseStateGroupsDistributions,handleDiseaseItem,handleDone}) => {
  
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
        
      <DiseaseState tableFields={fieldsToDiseaseModal()} itemConfiguration={modalSettings.item}/>
      <DistributionsSettings items={diseaseStateGroupsDistributions} itemConfiguration={modalSettings.item} handleConfig={handleDiseaseItem}/>  

      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Done'
        onClick={handleDone}
        disabled={false}
      />  

    </Grid>
    
  )
  return (
    <div>
      {diseaseStateCard()}
    </div>
  )
}
