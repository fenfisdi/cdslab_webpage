
import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Icon } from '@material-ui/core'

const BackButton = ({evenOnClick, text}) => {
  return (
    <Grid 
      container 
      item 
      xs={12} 
    >        
      <Button           
        startIcon={<Icon className="fas fa-arrow-left"  style={{ fontSize: 20, color: '#827B00', marginLeft:'10px' }} />}
        onClick={evenOnClick}
      >   
        {text}
      </Button>
    </Grid>
  )
}
      
export default BackButton
      