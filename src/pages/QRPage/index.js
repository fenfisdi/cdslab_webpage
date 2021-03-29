import React, {useEffect} from 'react'
import  QRImage  from '../../components/Register/QRcode'
import  QRvalidation  from '../../components/Register/QRValidation'
import { useStore } from '../../store/storeContext'
import { useUserActions } from '../../actions/userActions'
import Grid from '@material-ui/core/Grid'

const QRrender = (props) => {
  const {
    state: {
      register: { data, loading, error }
    },
    dispatch
  } = useStore()

  useEffect(() => {
    if (data && !error) {
      
      console.log('Data loader ', data) // dummy example
    }
    if (error) {
      console.log(':::::::error', error)
    }
  }, [data, error])
  
  useEffect(() => {
    console.log(props.responseRegister.url_path)
  }, [props.responseRegister.url_path]) 

  const { validateQr } = useUserActions(dispatch)

  const sendQrValue = (object) => {
    
    validateQr(object)
    console.log('::data send', object)
    
  }
  return(
    <Grid container 
      direction="column" 
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <QRImage qrUrl={props.responseRegister.url_path}/> 
      <QRvalidation eventEmitter={sendQrValue} email={props.responseRegister.email} sendStepSetup={props.sendStep}/>
    </Grid>    
  )
}

export default QRrender
