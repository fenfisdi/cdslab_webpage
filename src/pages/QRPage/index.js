import React from 'react'
import  QRImage  from '../../components/QrForm/QRcode'
import  QRvalidation  from '../../components/QrForm/QRValidation'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { useAuthQrState } from './state'

const QRrender = ({ urlPath,email, sendStep, showSnack, setShowSnack }) => {
  const {loading, validateQr}= useAuthQrState({urlPath,sendStep,showSnack, setShowSnack}) 

  
  const sendQrValue = (object) => {
    const {qrValue}= object
    validateQr({
      email: email,
      qr_value: qrValue
    })
    
  }

  const fillQrImage = () => (<>
    {urlPath && <QRImage qrUrl={urlPath}/>}
  </>
  )
  const fillLoginHelpers = () => (
    <Grid container
      direction="column" 
      alignItems="center"
      justify="center"
    >
      <Grid item xs>
        <Link href='/#/QrBindingRecovery' variant='body2'>
          Did you lost the QR binding?
        </Link>
      </Grid>
    </Grid>
  )
  return(
    <Grid container 
      direction="column" 
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      {fillQrImage()}
      <QRvalidation 
        eventEmitter={sendQrValue}  
        loading={loading}
        picture={urlPath?true:false}
      />
      {!urlPath && fillLoginHelpers()}
    </Grid>    
  )
}

export default QRrender
