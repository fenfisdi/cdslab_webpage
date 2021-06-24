import { Grid } from '@material-ui/core'
import React from 'react'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import { Button } from '../../../ui/Buttons'
import SubtitleCommon from '../../../ui/SubtitleCommon'

export const AgentsModalConstant = ({ modalSettings, setComponentChildren }) => {
  
  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.Distribution)
  }
  
  const handleSaveInformation =(item)=>{
    console.log(item)
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item xs={10}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>

      <SubtitleCommon text={'Constant'} />

      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>

      </Grid>

        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" onClick={() => handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
