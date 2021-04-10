import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { TitleComponent } from '../../ui/Title'
import QRImage from '../QRcode'

const QrBindingRecoveryShowLink = ({qrUrl, title, handleClick}) => {
  
  return (
    <Grid
      item
      container
      xs={6}
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"            
    >
      <TitleComponent
        justify={'center'}
        alignItems={'center'}
        title={title}
        variant={'h5'}
      />
         
      <QRImage qrUrl={qrUrl}/>
      
             
      <Button
        onClick={handleClick}      
        variant="contained"
        color="primary"
        className={{}}          
      >
                Continue
      </Button>
     
    </Grid>
  )
}
export default QrBindingRecoveryShowLink
