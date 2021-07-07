import { Grid, makeStyles } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import { Button } from '../../../ui/Buttons'
import { Input } from '../../../ui/Input'
import { useAgentsModalConstantFieldsCreation } from './fieldsCreation'

export const useAgentsModalConstantStyles = makeStyles(() => ({
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  },
  text:{
    fontSize:'17px',
    fontWeight:'600',
    marginRight:'20px'
  },
  title:{
    color:'#006064',
    fontSize:'20px',
    fontWeight: 500
  }
}))

export const AgentsModalConstant = ({ modalSettings,handlerDataStorage, setComponentChildren, parameterList,componentChildren }) => {
  const classes = useAgentsModalConstantStyles()
  const [isValid,setIsValid] = useState(false)
  const parameters = parameterList[componentChildren.toLowerCase()]
  
  const fields = useAgentsModalConstantFieldsCreation({parameters:parameters.type,valueSet:modalSettings.item})

  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }

  useEffect(()=>{
    if(!isEmpty(fields)){
      let validation = false
      Object.keys(fields).every(field => {        
        if (fields[field]['input']['value']=='' || fields[field]['input']['errors'].length>0) {
          validation = true
          return false
        }                  
        validation = false        
        return true
      })

      setIsValid(validation)
    }
    
  },[fields])
  
  const handleSaveInformation =(item)=>{    
    const { distribution, distribution: {kwargs} } = item
    distribution.type = componentChildren.toLowerCase()
    for (const field in fields) {      
      kwargs[componentChildren.toLowerCase()] = fields[field]['input']['value']
    }
    item.state = 'CONFIGURED'
    handlerDataStorage(item)    
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Constant</span></Grid>
        <Grid xs={1}  container   item justify='flex-end'><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
  
      <Grid container item xs={12} justify='center' alignItems='center' direction='column'>
        {Object.keys(fields).map((fieldType,index)=>{
          const {label, input} = fields[fieldType]
          return <div key={index} style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <div className={classes.text}>
              <strong>{label}:</strong>
            </div>
            <Input
              disabled={false}
              required
              variant="outlined"
              margin="normal"
              autoComplete="name"
              className={classes.Input}
              {...input}
            /> 
          </div>
        })}       
      </Grid>
        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" disabled={isValid?true:false}  onClick={() =>handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
