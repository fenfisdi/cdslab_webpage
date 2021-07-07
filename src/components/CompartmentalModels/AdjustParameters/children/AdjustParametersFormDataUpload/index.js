import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { SelectComponent } from '../../../../ui/Select'
import { useAdjustParametersFormDataUploadState } from './state'
import { RangePicker } from '../../../../ui/RangePicker'
import { UploadButton } from '../../../../ui/UploadButton'
import CompartmentalButton from '../../../CompartmentalButton'


const AdjustParametersFormDataUpload = ({  selectValues, eventEmitter }) => {
  
  const fieldsData = useAdjustParametersFormDataUploadState()
  const { rangePicker, stateVariable, uploadButton } = fieldsData
  const [isValid, setIsvalid] = useState(false)

  const handleClickButton = () => {
    let formData = new FormData()
    formData.append('file', uploadButton.value)
    formData.append('rangePicker', { first: rangePicker.formatterValue().valueFirst, second: rangePicker.formatterValue().valueSecond })
    formData.append('stateVariable', stateVariable.value)
    eventEmitter({ formData })
  }


  useEffect(() => {
    let notIsValid = false
    for (var key in fieldsData) {
      if (typeof fieldsData[key].formatterValue === 'function') {
        const dateValues = fieldsData[key].formatterValue()
        if (!dateValues.valueFirst || !dateValues.valueSecond) {
          notIsValid = true
        }
      } else if (!fieldsData[key].value) {
        notIsValid = true
      }
    }
    setIsvalid(notIsValid)
  }, [fieldsData])


  return (
    <Grid
      xs={12}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <SelectComponent
        xs={6}
        title="Select Variable"
        {...stateVariable}
        options={selectValues} />
      <RangePicker
        xs={12}
        {...rangePicker}
      />
      <UploadButton xs={6} {...uploadButton} />
      <CompartmentalButton
        disabled={!isValid ? false : true}
        onClick={handleClickButton}
        justify="center"
        alignItems="center"
        text={'Configure State Variables Settings'}
      />
    </Grid>
  )
}

export default AdjustParametersFormDataUpload
