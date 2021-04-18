import { useInputValue } from '../../../../ui/Input'
import { useSelectValue } from '../../../../ui/Select/useSelectValue'
import { VALIDATORS_ADJUST_PARAMETERS_FORM_DATA_UPLOAD } from './validators'

export const useAdjustParametersFormDataUploadState = () => {
  /******* form fields  */

  
  const dateBirth = useInputValue('', VALIDATORS_ADJUST_PARAMETERS_FORM_DATA_UPLOAD.dateTime, {
    name: 'dateBirth',
    type: 'date',
    label: 'birth date',
  })

  const genre = useSelectValue('', VALIDATORS_ADJUST_PARAMETERS_FORM_DATA_UPLOAD.genre, {
    options: [
      {
        value: 'F',
        label: 'Female',
      },
      {
        value: 'M',
        label: 'Male',
      },
    ],
    title: 'Gender',
  })
  

  return {
    dateBirth
  }

}