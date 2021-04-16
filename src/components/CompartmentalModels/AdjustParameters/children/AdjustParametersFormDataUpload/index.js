import { Grid } from '@material-ui/core'
import React from 'react'
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
    </Grid>
  )
}

export default AdjustParametersFormDataUpload
