import { Typography, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { SelectComponent } from '../../ui/Select'
import { UploadButton } from '../../ui/UploadButton'
import CompartmentalButton from '../CompartmentalButton'
import TableFormatStatic from './children/TableFormatStatic'
import { useUploadDataFormState } from './state'
import { UploadDataFormSection, UploadDataFormTitle, useUploadDataFormStyles } from './styles'
import TableFormatDynamic from './children/TableFormatDynamic'
import { processData } from '../../../utils/common'
import * as XLSX from 'xlsx'

const UploadDataForm =({selectOptions, executeRequest})=>{  
  const classes = useUploadDataFormStyles()
  
  const [headersTable, setHeadersTable] = useState([])
  const [dataTable, setDataTable] = useState([])
  const [isValid, setIsvalid] = useState(false)
  const formFields = useUploadDataFormState()
  const { stateVariable, uploadButton } = formFields

  
  useEffect(() => {
    let notIsValid = false
    for (var key in formFields) {
      if (!formFields[key].value) {
        notIsValid = true
      }
    }
    setIsvalid(notIsValid)
  }, [formFields])
 
  const handleClickButton = () => {
    let formData = new FormData()
    formData.append('file', uploadButton.value)
    formData.append('stateVariable', stateVariable.value)
    executeRequest({ formData })
  }


  const handleFileUpload = e => {
    if(e.target.files && e.target.files[0]){
      uploadButton.onChange(e)
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result        
        const wb = XLSX.read(bstr, { type: 'binary', raw:true  })
        /* Get first worksheet */
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 })
        const { body, headers } = processData(data)        
        setDataTable(body.slice(0,3))
        setHeadersTable(headers)
      }
      reader.readAsBinaryString(file)
    }
    
  }
 
  return (
    <UploadDataFormSection>
      <SelectComponent
        xs={3}
        title="Select Variable"
        {...stateVariable}
        options={selectOptions || []} />

      <UploadDataFormTitle>
        <Typography  className={classes.paragraph}>
            Upload a CSV optimization data file.
        </Typography>
        <Typography className={classes.paragraph}>
            The uploaded file should meet the following structure:
        </Typography>
      </UploadDataFormTitle>

      <Grid container item  xs={3}>
        
        <TableFormatStatic Variable={stateVariable.value} />

        <Typography className={`${classes.paragraph} sub`}>
          The Date column must be formatted using ISO date format: yyyy-mm-dd.
        </Typography>

      </Grid>

      <UploadButton xs={6} {...uploadButton} onChange={handleFileUpload} />

      {uploadButton.value && <Grid container item xs={4}>
        <TableFormatDynamic
          headersTable={headersTable}
          dataTable={dataTable}
        />
      </Grid>}

      <CompartmentalButton
        disabled={isValid}
        onClick={handleClickButton}
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />
    </UploadDataFormSection>
  )
}

export default UploadDataForm