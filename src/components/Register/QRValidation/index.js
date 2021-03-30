import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Input } from '../../ui/Input'
import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_VALUE } from  './validators'

const QRvalidation = ({eventEmitter, userData, sendStepSetup, qrValidation}) => {
  
  const qrvalue = useInputValue('', VALIDATORS_QR_VALUE.qrvalue, {
    name: 'qrvalue',
    type: 'int',
    label: 'Code',
  })
 
  useEffect(() => {
    if(qrValidation){
      console.log('Data loader ', qrValidation) // dummy example
      sendStepSetup(3) 
    }
  }, [qrValidation])

  const handleClick = () => {
    eventEmitter({
      email: userData.email,
      qr_value: qrvalue.value

    })
  }

  return(
    <>
      <Grid item xs={12} style={{ marginTop: '2%' }}>
        <h4>Please entered your code below</h4>
      </Grid>
      <Grid item xs={12}>
        <Input
          disabled={false}
          required
          fullWidth
          variant="outlined"
          margin="normal"
          {...qrvalue}
        />
      </Grid>
      <Button
        onClick={handleClick}
        type="submit"
        variant="contained"
        color="primary"
        className={{}}
        disabled={false}
      >
            Continue
      </Button>
    </>
  )
}

export default QRvalidation
