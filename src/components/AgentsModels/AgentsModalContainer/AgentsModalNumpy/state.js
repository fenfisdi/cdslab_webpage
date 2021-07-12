import React from 'react'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'
import { useSelectValue } from '../../../ui/Select/useSelectValue'
export const useAgentsModalNumpyState = () => {

  const numpySelect = useSelectValue('', {}, {
  })

  const fieldsFormat = (parameters) => {
    let fields = []
    for (let index = 0; index < parameters.length; index++) {
      for (let j = 0; j < parameters[index].values.length; j++){
        fields.push({
          parameter : parameters[index].parameter,
          name: parameters[index].values[j].name,
          type: parameters[index].values[j].type,
          input: renderInput(parameters[index].values[j].name)
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
    const component = <Input
      disabled={false}
      required
      variant="outlined"
      margin="normal"
      autoComplete="name"
      {...input}
    />

    return component
  }

  const checkFloat = (event) => {
    var valoresAceptados = /^[0-9.,$+/g]*$/
    if (!event.target.value.match(valoresAceptados)){
      event.target.value = event.target.value.substring(0,event.target.value.length -1)
    }
  }

  const optionsSelectNumpy = (parameters) => {
    let options = []
    for(let i = 0; i<parameters.length; i++){
      options.push({
        label: parameters[i].parameter,
        value: parameters[i].parameter
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

