import { SIMULATION_IDENTIFIERS } from '../../../constants/compartmental'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { VALIDATORS_CONFIGURABLE_PARAMETERS_FORM } from './validators'

export const useConfigurableParametersFormFieldsCreation = ({parameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < parameters.length; index++) {
    const { label }=parameters[index]
    const field = useSelectValue('', VALIDATORS_CONFIGURABLE_PARAMETERS_FORM.selectors, 
      {
        options:[
          {label:'Fixed parameter', value:SIMULATION_IDENTIFIERS.FIXED},
          {label:'Optimize parameter', value:SIMULATION_IDENTIFIERS.OPTIMIZE}
        ]
      }
    )
    fields[label]=field
        
  } 
  
  return fields
}