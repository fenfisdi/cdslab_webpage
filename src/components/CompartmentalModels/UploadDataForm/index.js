import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { SelectComponent } from '../../ui/Select'
import { UploadButton } from '../../ui/UploadButton'
import CompartmentalButton from '../CompartmentalButton'
import TableFomat from './children/TableFormat'
import { useUploadDataFormState } from './state'
import * as XLSX from 'xlsx'
import { processData } from '../../../utils/common'
import { useUploadDataFormStyles } from './styles'

const UploadDataForm =()=>{
  const formFields = useUploadDataFormState()
  const classes = useUploadDataFormStyles()
  const { stateVariable, uploadButton } = formFields
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  useEffect(()=>{
    console.log(':::::::::::::::>data',data)
    console.log(':::::::::::::::>columns',columns)
  },[data,columns])

  
  const handleFileUpload = e => {
    uploadButton.onChange(e)
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result
      const wb = XLSX.read(bstr, { type: 'binary' })
      /* Get first worksheet */
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 })
      const { body, headers } = processData(data)
      setData(body)
      setColumns(headers)
    }
    reader.readAsBinaryString(file)
  }
 
 
  return (
    <Grid
      xs={12}
      container
      item
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <SelectComponent
        xs={4}
        title="Select Variable"
        {...stateVariable}
        options={[{label:'a',name:'a', value:'a'}]} />

      <Grid container item xs={6} 
        justify="center"
        alignItems="center" 
        direction="column">

        <Grid container item justify="center"
          alignItems="center">
          <Typography  className={classes.paragraph}>
            Upload a CSV optimization data file.
          </Typography>
        </Grid>

        <Grid container item justify="center"
          alignItems="center">
          <Typography className={classes.paragraph}>
            The uploaded file should meet the following structure:
          </Typography>
        </Grid>

      </Grid>

      <Grid container item  xs={3}>
        
        <TableFomat Variable={stateVariable.value} />
        <Typography className={`${classes.paragraph} sub`}>
          The Date column must be formatted using ISO date format: yyyy-mm-dd.
        </Typography>

      </Grid>

      <UploadButton xs={6} {...uploadButton} onChange={handleFileUpload} />

      <CompartmentalButton
        disabled={true}
        onClick={()=>{console.log(':::::::::::::::::::>a')}}
        justify="center"
        alignItems="center"
        text={'Configure State Variables Settings'}
      />
    </Grid>
  )
}

export default UploadDataForm