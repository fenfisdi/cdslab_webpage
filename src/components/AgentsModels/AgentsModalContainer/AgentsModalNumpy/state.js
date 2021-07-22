import { isEmpty } from 'lodash'
import React from 'react'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'
import { useSelectValue } from '../../../ui/Select/useSelectValue'
export const useAgentsModalNumpyState = (initialValues,multiple, currentMultipleName) => {

  

  const valueSelect = () => {
    if(multiple){  
      return  !isEmpty(initialValues.distributions) && initialValues.distributions[currentMultipleName.name] ?
        initialValues.distributions[currentMultipleName.name]?.numpy_type : ''
    }else{
      return initialValues.distribution.numpy_type == '' ? '' : initialValues.distribution.numpy_type
    }
  }

  const numpySelect = useSelectValue(valueSelect(initialValues), {}, {
  })

  const handleKwargsReturn =(parameterName)=>{
    if(multiple){  
      console.log('kwargs======>',initialValues.distributions[currentMultipleName.name]?.kwargs)  
      return  !isEmpty(initialValues.distributions) && initialValues.distributions[currentMultipleName.name] ? 
        initialValues.distributions[currentMultipleName.name]?.kwargs[parameterName] : ''
    }else{
      
      return initialValues.distribution?.kwargs[parameterName]
    }
  }


  const fieldsFormat = (parameters) => {
    let fields = []
    for (let params of parameters) {
      for (let paramsValue of params['values']){
        console.log('parameters======>', paramsValue['name'])
        fields.push({
          parameter : params['parameter'],
          name: paramsValue['name'],
          type:paramsValue['type'],
          input: renderInput(paramsValue['name'],handleKwargsReturn(paramsValue['name']))
        })
      }        
    }
    return fields
  }

  const renderInput = (parameter,value) => {
    const input = useInputValue(value, [], {
      name: parameter,
      type: 'text',
      label:parameter,
      title:parameter,
      onKeyUp: (event) => {
        return checkFloat(event)
      }
    })
    return <Input
      disabled={false}
      required
      variant="outlined"
      margin="normal"
      autoComplete="name"
      {...input}
    />
  }

  const checkFloat = (event) => {
    var valoresAceptados = /^[0-9.,$+/g]*$/
    if (!event.target.value.match(valoresAceptados)){
      event.target.value = event.target.value.substring(0,event.target.value.length -1)
    }
  }

  const optionsSelectNumpy = (parameters) => {
    let options = []
    for(let params of parameters){
      options.push({
        label: params.parameter,
        value: params.parameter
      })
    }
    return options
  }

  return {
    fieldsFormat,
    optionsSelectNumpy,
    numpySelect
  }
}

