import { SIMULATION_IDENTIFIERS } from '../../../../../constants/compartmental'
import { checkTypePhoneNumber } from '../../../../../utils/common'
import { useInputValue } from '../../../../ui/Input/useInputValue'
import { extraParametersValidators } from './validators'



export const useExtraParametersFieldsCreation = ({parentValue, maxValue,minValue}) => {
  let fields = {
    [SIMULATION_IDENTIFIERS.FIXED]:[
      {fieldInput:useInputValue('', extraParametersValidators({maxValue,minValue}), {
        name: SIMULATION_IDENTIFIERS.FIXED,
        type: 'text',
        label:'value',
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    ],

    [SIMULATION_IDENTIFIERS.OPTIMIZE]:[
      {
        fieldInput:useInputValue('', extraParametersValidators({maxValue,minValue}), {
          name: `${SIMULATION_IDENTIFIERS.OPTIMIZE}_One`,
          type: 'text',
          label: 'Min value',
          onKeyDown: (event) => {
            return checkTypePhoneNumber(event)
          }})
      },

      {fieldInput:useInputValue('', extraParametersValidators({maxValue,minValue}), {
        name: `${SIMULATION_IDENTIFIERS.OPTIMIZE}_Two`,
        type: 'text',
        label:'Max value',
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    ]

  }

  
  return fields[parentValue]
}