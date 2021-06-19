import { useSelectValue } from '../../../components/ui/Select/useSelectValue'
import { VALIDATORS_UPLOAD_DATA_FORM } from './validators'

export const useComparmentalInsPageCreateFields = () => {
  /******* form fields  */

  const stateVariable = useSelectValue('', VALIDATORS_UPLOAD_DATA_FORM.selectVariable, {})
  
  return {
    stateVariable
  }

}