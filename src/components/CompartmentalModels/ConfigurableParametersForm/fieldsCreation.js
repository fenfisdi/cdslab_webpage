import { SIMULATION_IDENTIFIERS } from '../../../constants/compartmental'
import { checkTypePhoneNumber } from '../../../utils/common'
import { useInputValue } from '../../ui/Input/useInputValue'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { extraParametersValidators } from './children/extraParameters/validators'
import { VALIDATORS_CONFIGURABLE_PARAMETERS_FORM } from './validators'

export const useConfigurableParametersFormFieldsCreation = ({parameters=[],valuesFieldParameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < parameters.length; index++) {
   
    let field ={}
    const { label, max_value:maxValue= Number.MAX_SAFE_INTEGER, min_value:minValue=0 }=parameters[index]
    const { type,max_value,min_value,value }  = valuesFieldParameters[index]

    field['SELECTInput'] = useSelectValue(type?type.toUpperCase():'', VALIDATORS_CONFIGURABLE_PARAMETERS_FORM.selectors, 
      {
        options:[
          {label:'Fixed parameter', value:SIMULATION_IDENTIFIERS.FIXED},
          {label:'Optimize parameter', value:SIMULATION_IDENTIFIERS.OPTIMIZE}
        ]
      }
    )
    
    field[`${SIMULATION_IDENTIFIERS.FIXED}Input`]=[
      {...useInputValue(value?value:'', extraParametersValidators({maxValue,minValue}), {
        name: `${SIMULATION_IDENTIFIERS.FIXED}One`,
        type: 'text',
        label:'value',
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    ],

    field[`${SIMULATION_IDENTIFIERS.OPTIMIZE}Input`]=[
      {
        ...useInputValue(min_value?min_value:'', extraParametersValidators({maxValue,minValue}), {
          name: `${SIMULATION_IDENTIFIERS.OPTIMIZE}One`,
          type: 'text',
          label: 'Min value',
          onKeyDown: (event) => {
            return checkTypePhoneNumber(event)
          }})
      },

      {...useInputValue(max_value?max_value:'', extraParametersValidators({maxValue,minValue}), {
        name: `${SIMULATION_IDENTIFIERS.OPTIMIZE}Two`,
        type: 'text',
        label:'Max value',
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    ]
    
    fields[label]=field        
  } 
  
  return fields
}

export const creationResponseConfigurableParametersForm =(fieldsParametersForm)=>{
  let arrayResponse=[]
  let parameterResponse={
    'label': '',
    'type': '',
    'value': 0,
    'min_value': 0,
    'max_value': 0
  }
  for (const keyfieldsParameter in fieldsParametersForm) {
    const selectValue = fieldsParametersForm[keyfieldsParameter]['SELECTInput']['value']
    const extraFields =  fieldsParametersForm[keyfieldsParameter][`${selectValue}Input`]
    parameterResponse={}
    parameterResponse.label = keyfieldsParameter
    parameterResponse.type =  selectValue.toLowerCase()

    if(selectValue == SIMULATION_IDENTIFIERS.OPTIMIZE){      
      parameterResponse.min_value = parseInt(extraFields[0]['value'])
      parameterResponse.max_value = parseInt(extraFields[1]['value'])
      parameterResponse.value = 0
      
    }else if(selectValue == SIMULATION_IDENTIFIERS.FIXED){
      parameterResponse.value = parseInt(extraFields[0]['value'])
      parameterResponse.min_value = 0
      parameterResponse.max_value = 0
      
    }    
    arrayResponse.push(parameterResponse)
  }
  return arrayResponse
}