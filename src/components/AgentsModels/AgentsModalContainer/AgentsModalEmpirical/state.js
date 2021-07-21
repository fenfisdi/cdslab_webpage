import React from 'react'
import { checkTypePhoneNumber } from '../../../../utils/common'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'
import { useSelectValue } from '../../../ui/Select/useSelectValue'
import { SelectComponent } from '../../../ui/Select'
import { useUploadButtonValue } from '../../../ui/UploadButton/useUploadButtonValue'
import { useSwitchInputValue } from '../../../ui/SwitchInput/useSwitchInputValue'
import { SwitchInput } from '../../../ui/SwitchInput'
import { isEmpty } from 'lodash'




export const useAgentsModalEmpiricalState = () => {

  const uploadButton = useUploadButtonValue(null, { accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' })
  
  const handleKwargsReturn =(initialValues,default_value,multiple,currentMultipleName,parameter,type)=>{
    if(multiple){      
      return  !isEmpty(initialValues.distributions) && initialValues.distributions[currentMultipleName.name] ? 
        (type == 'boolean' && initialValues.distributions[currentMultipleName.name]?.kwargs[parameter] == true ? 'True' :initialValues.distributions[currentMultipleName.name]?.kwargs[parameter])
        : default_value
    }else if(!isEmpty(initialValues.distribution.kwargs)){      
      return type == 'boolean' && initialValues.distribution.kwargs[parameter] == true ? 'True' :initialValues.distribution.kwargs[parameter]
    }else {
      return default_value
    }
  }
  
  const fieldsFormat = (valueSet,parameters,multiple, currentMultipleName) => {
    console.log(valueSet)
    let fields = {}
    for (let params of parameters) {
      let field ={}
      const { parameter='',type='',default_value = '',values =[] }=params     
      field['label']=parameter
      field['type']=type                               
      field['input'] = renderInput(type,values,parameter,handleKwargsReturn(valueSet,default_value,multiple,currentMultipleName,parameter,type))
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
  
  const formatSelectOption = (FieldOptions) => {
    let optionsS = []
    
    for (let options of FieldOptions) {
      optionsS.push({
        value: options,
        label: options
      })
    }
    return optionsS
  }

  const renderInput = (type,values,parameter,default_value) => {
    let value = null
    let component = null
    if(type == 'str'){
      const inputTextParam = inputText(parameter,default_value)
      value = values[0]
      component = 
        <Input
          disabled={false}
          value={value}
          required
          variant="outlined"
          margin="normal"
          autoComplete="name"
          {...inputTextParam}
        />
    }else if(type == 'float' || type == 'int' || type == 'dict') {
      const inputNumberParam = inputNumber(parameter,default_value)
      component = 
        <Input
          disabled={false}
          value={value}
          required
          variant="outlined"
          margin="normal"
          autoComplete="name"
          {...inputNumberParam}
        />
    } else if(type == 'boolean'){
      const inputSwitchParam = inputSwitch(parameter,default_value)
      component =  <SwitchInput  
        color="primary" 
        {...inputSwitchParam}
      />
    } 
    else {
      const valueSelectParam= formatSelectOption(values)
      const inputSelectParam = inputSelect(parameter,default_value)
      component = 
        <SelectComponent
          required
          {...inputSelectParam}
          options={valueSelectParam}
        />
    }
    return component
  }
  
  

  return {
    fieldsFormat,
    uploadButton
  }
}

