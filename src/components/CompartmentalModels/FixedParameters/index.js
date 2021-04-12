import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useFixedParametersStyles } from './styles'
import { useFixedParametersState } from './state'


const FixedParameters = ({predefinedModel}) => {
  const classes = useFixedParametersStyles()
  const {updateStep,step}= useFixedParametersState()
  const {name}=predefinedModel

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
      Fixed Paramaters
      </Typography>
      <Typography variant="body2" component="p" className={classes.title}>
        {name} Model 
      </Typography>
      <Typography variant="body2" component="p" className={classes.title}>
      Configure parameters values    
      </Typography>
      
    </Grid>
  )
}

export default FixedParameters