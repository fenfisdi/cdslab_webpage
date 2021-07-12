import { Grid } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import TableTextInput from '../../../TableTextInput'
import { Button } from '../../../ui/Buttons'
import { UploadButton } from '../../../ui/UploadButton'
import { useAgentsModalConstantStyles } from '../AgentsModalNumpy'
import { useAgentsModalEmpiricalState } from './state'



export const AgentsModalEmpirical = ({ modalSettings,handlerDataStorage, setComponentChildren, parameterList,componentChildren }) => {
  const classes = useAgentsModalConstantStyles()
  const [isValid,setIsValid] = useState(false)
  const parameters = parameterList[componentChildren.toLowerCase()]
  
  const { fieldsFormat,uploadButton } = useAgentsModalEmpiricalState()

  const fieldsForm = fieldsFormat(modalSettings.item,parameters.type)
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
    console.log(fieldsForm)
    if(fieldsForm){
      let validation = false
      for (const fieldType in fieldsForm) {   
        if(fieldsForm[fieldType]['input']['props']['value'] == ''){
          validation = true
          return false
        }else{
          validation = false
          return false
        }
      }
      setIsValid(validation)
    }
  },[fieldsForm])
    
  
  const handleSaveInformation =(item)=>{
    const { distribution, distribution: {kwargs} } = item
    distribution.type = componentChildren.toLowerCase()
    for (const field in fieldsForm) {     
      if(fieldsForm[field]['type'] != 'boolean'){
        kwargs[field.toLowerCase()] = fieldsForm[field]['input']['props']['value']
      }else{
        kwargs[field.toLowerCase()] = fieldsForm[field]['input']['props']['checked']
      }
        
    }
    item.state = 'CONFIGURED'
    if(uploadButton.value){
      handlerDataStorage(item,uploadButton.value,true)
    }else{
      handlerDataStorage(item) 
    }
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Empirical</span></Grid>
        <Grid xs={1}  container   item justify='flex-end'><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
  
      <Grid item xs={2}>
        <UploadButton xs={12} {...uploadButton} onChange={handleFileUpload} />
      </Grid>

      <Grid item xs={10}>
        <TableTextInput 
          data={fieldsForm}
          columns={['Parameters','Type','Field']}
          onchange={handleSaveInformation}
        />
      </Grid>
        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" disabled={isValid?true:false}  onClick={() =>handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
