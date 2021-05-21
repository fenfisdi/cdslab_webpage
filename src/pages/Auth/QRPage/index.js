import React, {useContext } from 'react'
import QRImage from '@components/QrForm/QRcode'
import QRvalidation from '@components/QrForm/QRValidation'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { useAuthQrState } from './state'
import {languageContext} from '../../../config/languageContext'

const QRrender = ({location, urlPath, email, sendStep, showSnack, setShowSnack }) => {
  const { loading, validateQr, validateCode } = useAuthQrState({ urlPath, sendStep, showSnack, setShowSnack })
  const { t } = useContext(languageContext)

  const sendQrValue = (object) => {
    const { otp_code } = object
    switch(location){
    case 'register': 
      validateQr({
        email: email,
        otp_code: otp_code
      }) 
      break
    case 'login':
      validateCode({
        email: email,
        otp_code: otp_code
      }) 
      break
    }
  }
  
  const fillQrImage = () => (<>
    {urlPath && <QRImage qrUrl={urlPath} />}
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
          {t('qrForm.recoverQrBinding')}
        </Link>
      </Grid>
    </Grid>
  )
  return (
    <Grid container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      {fillQrImage()}
      <QRvalidation
        location={'register'}
        eventEmitter={sendQrValue}
        loading={loading}
        picture={urlPath ? true : false}
      />
      {!urlPath && fillLoginHelpers()}
    </Grid>
  )
}

export default QRrender
