import { useUploadButtonValue } from '../../../ui/UploadButton/useUploadButtonValue'

export const useAgentsModalWeightsState = () => {
  const uploadButton = useUploadButtonValue(null, { accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' })

  return {
    uploadButton
  }
}

