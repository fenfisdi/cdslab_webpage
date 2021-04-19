import { Button, Grid } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import React from 'react'
import DatePicker from '../../../../ui/DatePicker'
import { SelectComponent } from '../../../../ui/Select'


const AdjustParametersFormDataUpload = ({parameters,selectValues}) => {
  console.log(':::::::::::::::>parameters',parameters)
  
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
        onChange={(event)=>{console.log('onchangeval::::::::::::::>',event.target.value)}}
        options={selectValues} />
      <Grid container item xs={6}>
        <DatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          
          onChange={(va)=>{console.log(va)}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Grid container item xs={6}>
        <DatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          onChange={(va)=>{console.log(va)}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Grid container item>
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            hidden
          />
        </Button>
      </Grid>
    </Grid>
  )
}

export default AdjustParametersFormDataUpload
