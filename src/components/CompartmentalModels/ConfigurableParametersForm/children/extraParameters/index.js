import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { useExtraParametersFieldsCreation } from './fieldsCreation'
import { Input } from '../../../../ui/Input'



const ExtraParameters = ({ parentValue, maxValue, minValue, showError }) => {
 
  const fieldsExtraParameters = useExtraParametersFieldsCreation({parentValue,maxValue,minValue})
  useEffect(()=>{
    let countError =0
    fieldsExtraParameters.forEach((fieldExtraParameters)=>{
      const {fieldInput:{errors}} = fieldExtraParameters
      if(errors.length>0){
        showError(errors.map(e => e.message)?.join('\n'))
        return
      }
      countError = countError +1  
      console.log(':::::::::::::>fieldsExtraParameters',fieldExtraParameters)
    })
    countError == fieldsExtraParameters.length && showError('')
    fieldsExtraParameters[0]['fieldInput']['value'] == 3 && showError('noo')
  },[fieldsExtraParameters])


  return (  
    <Grid container item xs={fieldsExtraParameters.length+1}>     
      {fieldsExtraParameters && fieldsExtraParameters.map((field,index)=>{      
        const { fieldInput } = field        
        delete fieldInput['helperText']
        //showError(fieldsExtraParameters)   
        return (
          <Grid container item xs key={index} justify="center" alignItems="center">
            <Input              
              disabled={false}
              required                  
              variant="outlined"
              margin="normal"
              autoComplete="name"
              {...fieldInput}  
            />   
            
          </Grid>          
        )
      })}
    </Grid>

   
      

    

  )
}

export default ExtraParameters
