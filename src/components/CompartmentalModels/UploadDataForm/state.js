
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { useUploadButtonValue } from '../../ui/UploadButton/useUploadButtonValue'
import { VALIDATORS_UPLOAD_DATA_FORM } from './validators'

export const useUploadDataFormState = () => {
  /******* form fields  */

  const stateVariable = useSelectValue('', VALIDATORS_UPLOAD_DATA_FORM.selectVariable, {})
  const uploadButton = useUploadButtonValue(null, { accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' })


  return {
    stateVariable,
    uploadButton
  }

}