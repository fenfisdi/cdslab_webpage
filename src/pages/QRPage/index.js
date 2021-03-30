import React, {useEffect} from 'react'
import  QRImage  from '../../components/Register/QRcode'
import  QRvalidation  from '../../components/Register/QRValidation'
import { useStore } from '../../store/storeContext'
import { useUserActions } from '../../actions/userActions'
import Grid from '@material-ui/core/Grid'

const QRrender = ({ responseRegister, sendStep }) => {
  const {
    state: {
      qrValidation: { data, isValid, error }
    },
    dispatch
  } = useStore()
  const { validateQr } = useUserActions(dispatch)

  useEffect(() => {
    if (data && !error) {
      console.log('Data loader ', data) // dummy example
    }
    if (error) {
      console.log(':::::::error', error)
    }
  }, [data, error])
  
  useEffect(() => {
    console.log(responseRegister?.url_path)
  }, [responseRegister]) 

  

  const sendQrValue = (object) => {
    
    validateQr(object)
    console.log('::data send', object)
    
  }

  const fillQrImage = () => (<>
    {responseRegister?.url_path && <QRImage qrUrl={responseRegister.url_path}/>}
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
      <QRvalidation eventEmitter={sendQrValue} userData={responseRegister} sendStepSetup={sendStep} qrValidation={isValid}/>
    </Grid>    
  )
}

export default QRrender
