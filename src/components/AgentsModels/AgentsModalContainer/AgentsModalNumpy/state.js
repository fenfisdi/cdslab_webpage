import React from 'react'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'
import { useSelectValue } from '../../../ui/Select/useSelectValue'
export const useAgentsModalNumpyState = () => {

  const numpySelect = useSelectValue('', {}, {
  })

  const fieldsFormat = (parameters) => {
    let fields = []
    for (let params of parameters) {
      for (let paramsValue of params['values']){
        fields.push({
          parameter : params['parameter'],
          name: paramsValue['name'],
          type:paramsValue['type'],
          input: renderInput(paramsValue['name'])
        })
      }        
    }
    return fields
  }

  const renderInput = (parameter) => {
    const input = useInputValue('', [], {
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
