import React, {useEffect} from 'react'
import  QRImage  from '../../components/QrForm/QRcode'
import  QRvalidation  from '../../components/QrForm/QRValidation'
import Grid from '@material-ui/core/Grid'
import { useAuthQrState } from './state'

const QRrender = ({ urlPath,email, sendStep, showSnack, setShowSnack }) => {
  const {data, isValid, error, loading, validateQr}= useAuthQrState({urlPath,sendStep,showSnack, setShowSnack}) 

  
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
    </Grid>    
  )
}

export default QRrender
