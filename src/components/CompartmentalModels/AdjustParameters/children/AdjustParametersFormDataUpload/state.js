import { useRangePickerValue } from '../../../../ui/RangePicker/useRangePickerValue'
import { useSelectValue } from '../../../../ui/Select/useSelectValue'
import { useUploadButtonValue } from '../../../../ui/UploadButton/useUploadButtonValue'
import { VALIDATORS_ADJUST_PARAMETERS_FORM_DATA_UPLOAD } from './validators'

export const useAdjustParametersFormDataUploadState = () => {
  /******* form fields  */

  const stateVariable = useSelectValue('', VALIDATORS_ADJUST_PARAMETERS_FORM_DATA_UPLOAD.genre, {})
  const rangePicker = useRangePickerValue(null, null, [], {})
  const uploadButton = useUploadButtonValue(null, [], { accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' })


  return {
    rangePicker,
    stateVariable,
    uploadButton
  }

}