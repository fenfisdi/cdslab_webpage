
import React from 'react' 
import {ParametersFormHeader, ParametersFormHeaderItem} from './styles'

const ConfigureStateVariablesHeader =()=>{
  
  return (
    
    <ParametersFormHeader>
      <ParametersFormHeaderItem justifyContent="flex-end" alignItems="center">
        <strong>State variable</strong>
      </ParametersFormHeaderItem>
      <ParametersFormHeaderItem justifyContent="center" alignItems="center">
        <strong>Value</strong>      
      </ParametersFormHeaderItem>
      <ParametersFormHeaderItem justifyContent="flex-start" alignItems="center">
        <strong>Units</strong>
      </ParametersFormHeaderItem>
    </ParametersFormHeader>
  )

}

export default ConfigureStateVariablesHeader