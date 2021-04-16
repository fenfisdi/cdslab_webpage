import { Grid, Typography } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React from 'react'
import CompartmentalButton from '../../../CompartmentalButton'
import ModelCard from '../../../ModelCard'



const AdjustParametersFormResourceSelection = ({
  options,
  setModelData,
  classes,
  modelData,
  handleClickButton,
  slectedModel}) => {
    

  

  return (
    <Grid
      xs={12}
      container 
      direction="column" 
      justify="center" 
      alignItems="center"
      spacing={2}
    >
      <Typography variant="body1" component="p" className={classes.title}>
          Choose Data Source
      </Typography>
    
      <ModelCard 
        justify="center"
        alignItems="center"
        options={options}
        eventEmitted={(data)=>{setModelData(data)}}
      />
      <CompartmentalButton        
        disabled={isEmpty(modelData)}   
        onClick={handleClickButton}           
        justify="center"
        alignItems="center"
        text={`Go to ${slectedModel ? slectedModel:'<Upload Data / Use Available data selected>'} Settings`} 
      />
    </Grid>
  )
}

export default AdjustParametersFormResourceSelection
