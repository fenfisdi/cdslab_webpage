import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Icon } from '@material-ui/core'
import { useCompartmentalButtonStyles } from './styles'


const CompartmentalButton = ({justify,alignItems,text}) => {
  const classes = useCompartmentalButtonStyles()

  return (
    <Grid 
      container 
      item 
      xs={12} 
      justify={justify} 
      alignItems={alignItems}
      className={classes.body}
    >
      <Typography variant="body1" component="p" className={classes.text}>
        {text}
      </Typography>          
      {/* <Button           
        startIcon={<Icon class="fas fa-caret-right"  style={{ fontSize: 60, color: '#827B00', marginLeft:'20px' }} />}
      >        
      </Button> */}
      <Icon class="fas fa-caret-right"  style={{ fontSize: 60, color: '#827B00', marginLeft:'20px' }} />
    </Grid>
  )
}

export default CompartmentalButton
