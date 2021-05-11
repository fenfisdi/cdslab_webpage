import { SIMULATION_IDENTIFIERS } from '../../../constants/compartmental'
import { checkTypePhoneNumber } from '../../../utils/common'
import { useInputValue } from '../../ui/Input/useInputValue'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { extraParametersValidators } from './children/extraParameters/validators'
import { VALIDATORS_CONFIGURABLE_PARAMETERS_FORM } from './validators'

export const useConfigurableParametersFormFieldsCreation = ({parameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < parameters.length; index++) {
    let field ={}
    const { label, max_value:maxValue, min_value:minValue }=parameters[index]
    field['SELECTInput'] = useSelectValue('', VALIDATORS_CONFIGURABLE_PARAMETERS_FORM.selectors, 
      {
        options:[
          {label:'Fixed parameter', value:SIMULATION_IDENTIFIERS.FIXED},
          {label:'Optimize parameter', value:SIMULATION_IDENTIFIERS.OPTIMIZE}
        ]
      }
    )
    
    field[`${SIMULATION_IDENTIFIERS.FIXED}Input`]=[
      {...useInputValue('', extraParametersValidators({maxValue,minValue}), {
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
        ...useInputValue('', extraParametersValidators({maxValue,minValue}), {
          name: `${SIMULATION_IDENTIFIERS.OPTIMIZE}One`,
          type: 'text',
          label: 'Min value',
          onKeyDown: (event) => {
            return checkTypePhoneNumber(event)
          }})
      },

      {...useInputValue('', extraParametersValidators({maxValue,minValue}), {
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