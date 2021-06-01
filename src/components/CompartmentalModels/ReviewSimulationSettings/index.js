import React from 'react'
import CompartmentalButton from '../CompartmentalButton'
import { 
  ExtraParamsItem, 
  ExtraParamsLabel, 
  Items, 
  ItemsTable, 
  ReviewSimulationSettingsBody, 
  SubItems, 
  SubItemsTable } from './styles'


const ReviewSimulationSettings =({simulation,executeRequest, buttonText='', showButton=false})=>{

  const displayParameters=(parameters)=>{
    return parameters.map( parameter => {
      return(
        <SubItemsTable key={parameter.label}>    
          <ExtraParamsLabel>
            label: {parameter.label} 
          </ExtraParamsLabel>
          {parameter.type=='fixed' ?
            <ExtraParamsItem>
              value: {parameter.value}
            </ExtraParamsItem>:displayOptimizedParametersValue(parameter)}
        </SubItemsTable>
      )
    })
  } 

  const displayOptimizedParametersValue =(parameter)=>{
    return (<ExtraParamsItem>
      <span style={{marginRight:'10px'}}>min Value:{parameter.min_value}</span>
      <span>max Value:{parameter.max_value}</span>
    </ExtraParamsItem>)
  }

  const displayStateVariables=(stateVariables)=>{
    return stateVariables.map( variable => {
      return(
        <SubItemsTable key={variable.label}>    
          <ExtraParamsLabel>
            label: {variable.label} 
          </ExtraParamsLabel>
          <ExtraParamsItem>
              value: {variable.value}
          </ExtraParamsItem>
        </SubItemsTable>
      )
    })
  } 

  return (

    <ReviewSimulationSettingsBody>
      <Items>
        <SubItems className="titleSubItmes">
          <span>Simulation Name:</span>
        </SubItems>
        <SubItems>
          <span>{simulation.name || ''}</span>
        </SubItems>
      </Items>
      <Items>
        <SubItems className="titleSubItmes">
          <span>Type of simulation:</span>
        </SubItems>
        <SubItems>
          <span>{simulation.parameter_type || ''}</span>
        </SubItems>
      </Items>
      <Items>
        <SubItems className="titleSubItmes">
          <span>Model:</span>
        </SubItems>
        <SubItems>
          <span>{simulation.modelName || ''}</span>
        </SubItems>
      </Items>
      <ItemsTable>
        <SubItems className='tableTitle'>
          <span>Parameters:</span>
        </SubItems>
        {displayParameters(simulation.parameters_limits || [])}
      </ItemsTable>
      <ItemsTable>
        <SubItems className='tableTitle'>
          <span>State Variable:</span>
        </SubItems>
        {displayStateVariables(simulation.state_variable_limits || [])}
      </ItemsTable>
      {simulation.fileName && simulation.fileName.length>0 && <Items className="jump">
        <SubItems className="titleSubItmes">
          <span>Data Source:</span>
        </SubItems>
        <SubItems >
          <span>{simulation.fileName}</span>
        </SubItems>
      </Items>}
      {executeRequest && showButton && <CompartmentalButton
        disabled={false}
        onClick={()=>{executeRequest()}}
        justify="center"
        alignItems="center"
        text={buttonText}
      />}
    </ReviewSimulationSettingsBody>
  )
}

export default ReviewSimulationSettings