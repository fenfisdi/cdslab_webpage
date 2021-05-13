import React from 'react'
import { Button, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Icon } from '@material-ui/core'
import { useCompartmentalButtonStyles } from './styles'


const CompartmentalButton = ({justify,alignItems,text, onClick,disabled, icon}) => {
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
             
      <Button
        variant="contained"
        className={disabled ? classes.button+' disabled':classes.button}
        disabled={disabled}
        onClick={onClick}           
        endIcon={<Icon className={icon || 'fas fa-arrow-circle-right'}  style={{ fontSize: 25, color: '#44605D' }} />}
      >        
        <Typography variant="body1" component="p" className={disabled?classes.text+' disabled':classes.text}>
          {text}
        </Typography>  
      </Button>
      {/* <Icon className="fas fa-caret-right"  style={{ fontSize: 60, color: '#827B00', marginLeft:'20px' }} /> */}
    </Grid>
  )
}

export default CompartmentalButton
