import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { useConfigurableParametersFormFieldsCreation } from './fieldsCreation'
import CompartmentalButton from '../CompartmentalButton'
import ParametersForm from './children/parametersForm'

const ConfigurableParametersForm = ({parameters}) => {
  const [isValid,setIsValid] = useState('')
  const fieldsParametersForm = useConfigurableParametersFormFieldsCreation({parameters})
  console.log('ConfigurableParametersForm parameters:::::::::::::>',parameters)
  console.log('ConfigurableParametersForm fields:::::::::::::>',fieldsParametersForm)


  useEffect(()=>{
    for (const keyFields in fieldsParametersForm) {
      const { value: selectValue } = fieldsParametersForm[keyFields]['SELECTInput']
      if(selectValue){
        fieldsParametersForm[keyFields][`${selectValue}Input`].forEach(element => {
          console.log('::::::::::::::>element',element)
        })
      }
    }
  },[fieldsParametersForm])

  return (
    <Grid container item xs={12}>
      
      <ParametersForm parameters={parameters} fieldsParametersForm={fieldsParametersForm}/> 

      <CompartmentalButton
        disabled={isValid!=''? true:false}
        onClick={()=>{console.log('presione')}}        
        justify="center"
        alignItems="center"
        text={'Configure State Variables Settings'}
      />  
      
    </Grid>

  )

  
}

export default ConfigurableParametersForm
