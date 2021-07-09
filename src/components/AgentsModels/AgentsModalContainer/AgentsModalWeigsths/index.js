import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import { Button } from '../../../ui/Buttons'
import { UploadButton } from '../../../ui/UploadButton'
import { useAgentsModalWeigsthsStyles } from './style'
import { useAgentsModalWeigsthsState } from './state'



export const AgentsModalWeigsths = ({ modalSettings,handlerDataStorage, setComponentChildren,componentChildren }) => {
  const classes = useAgentsModalWeigsthsStyles()
  const [isValid,setIsValid] = useState(false)
  
  const { uploadButton } = useAgentsModalWeigsthsState()

  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }

  const handleFileUpload = e => {
    if(e.target.files && e.target.files[0]){
      uploadButton.onChange(e)
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsBinaryString(file)
    }
  }
  
  useEffect(()=>{
    let validation = false      
    if(!uploadButton.value){
      validation = true
      return
    }
    setIsValid(validation)
  },[uploadButton])
    
  
  const handleSaveInformation =(item)=>{
    const { distribution } = item
    distribution.type = componentChildren.toLowerCase()
    item.state = 'CONFIGURED'
    if(uploadButton.value){
      handlerDataStorage(item,uploadButton.value,true)
    }
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Weigsths</span></Grid>
        <Grid xs={1}  container   item justify='flex-end'><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
  
      <Grid item xs={8}>
        <UploadButton xs={12} {...uploadButton} onChange={handleFileUpload} />
      </Grid>
        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" disabled={isValid?true:false}  onClick={() =>handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
