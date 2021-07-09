import React, { useState } from 'react'
import { checkTypePhoneNumber } from '../../../../utils/common'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'
import { useSelectValue } from '../../../ui/Select/useSelectValue'
import { SelectComponent } from '../../../ui/Select'
import { useUploadButtonValue } from '../../../ui/UploadButton/useUploadButtonValue'
import { Switch } from '@material-ui/core'
import { useSwitchInputValue } from '../../../ui/SwitchInput/useSwitchInputValue'
import { SwitchInput } from '../../../ui/SwitchInput'




export const useAgentsModalEmpiricalState = () => {

  const uploadButton = useUploadButtonValue(null, { accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' })
  const [value, setValue] = useState()

  const fieldsFormat = (valueSet,parameters) => {
    const { distribution:{distribution_extra_arguments}} = valueSet
    let fields = {}
    for (let index = 0; index < parameters.length; index++) {    
      console.log(parameters[index])
      let field ={}
      const { parameter='',type='',default_value = '',values =[] }=parameters[index]     
      field['label']=parameter
      field['type']=type                               
      field['input'] = renderInput(type,values,parameter,default_value,distribution_extra_arguments)
      fields[parameter]=field        
    } 
    return fields
  }
  
  const inputNumber = (parameter,default_value) => {
    
    return  {...useInputValue(default_value, [], {
      name: parameter,
      type: 'number',
      label:parameter,
      title:parameter,
      onKeyDown: (event) => {
        return checkTypePhoneNumber(event)
      }}),
    }
  }
  
  const inputText = (parameter,default_value) => {
    return  {...useInputValue(default_value, [], {
      name: parameter,
      type: 'text',
      label:parameter,
      title:parameter
    }),
    }
  }
  const inputSwitch = (parameter,default_value) => {
    return  {...useSwitchInputValue(default_value == 'True' ? true : false , [], {
      name: parameter,
      label:parameter,
      title:parameter
    }),
    }
  }
  
  const inputSelect = (parameter,default_value) => {
    return {...useSelectValue(default_value, [], {
      name: parameter,
      label:parameter,
      title:parameter
    })} 
  }
  
  const formatSelectOption = (FieldOptions,parameter  ) => {
    console.log('============>',parameter,FieldOptions)
    let options = []
    for (let i = 0; i < FieldOptions.length; i++) {
      options.push({
        value: FieldOptions[i],
        label: FieldOptions[i]
      })
    }
    return options
  }

  const onChange = (e) => {
    e && setValue(e.target.value)
  }

  const renderInput = (type,values,parameter,default_value,distribution_extra_arguments) => {
    let value = null
    let component = null
    if(type == 'str'){
      const input = inputText(parameter,default_value,distribution_extra_arguments)
      value = values[0]
      component = 
        <Input
          disabled={false}
          value={value}
          required
          variant="outlined"
          margin="normal"
          autoComplete="name"
          {...input}
        />
    }else if(type == 'float' || type == 'int' || type == 'dict') {
      const input = inputNumber(parameter,default_value,distribution_extra_arguments)
      component = 
        <Input
          disabled={false}
          value={value}
          required
          variant="outlined"
          margin="normal"
          autoComplete="name"
          {...input}
        />
    } else if(type == 'boolean'){
      const input = inputSwitch(parameter,default_value,distribution_extra_arguments)
      component =  <SwitchInput  
        color="primary" 
        {...input}
      />
    } 
    else {
      const value = formatSelectOption(values,parameter)
      const input = inputSelect(parameter,default_value,distribution_extra_arguments)
      component = 
        <SelectComponent
          required
          {...input}
          options={value}
        />
    }
    return component
  }
  
  

  return {
    fieldsFormat,
    uploadButton
  }
}

