import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Input } from '../../ui/Input'
import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_VALUE } from  './validators'
import LoaderComponent from '../../ui/Loader'

const QRvalidation = ({eventEmitter,loading,picture}) => {
  
  const otp_code = useInputValue('', VALIDATORS_QR_VALUE.otp_code, {
    name: 'otp_code',
    type: 'int',
    label: 'Code',
  })

  const handleClick = () => {
    eventEmitter({otp_code: otp_code.value})
  }

  return(
    
    <Grid container justify="center" alignItems="center" direction="column">
      {loading && <LoaderComponent width="100%" height={80} marginTop="20px"/>}
      {!loading && <Fragment>
        <Grid item xs={12} style={{ marginTop: '2%' }}>
          <h4>Please enter verification code.</h4>
        </Grid>
        <Grid item xs={picture ? 2:12}>
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            {...otp_code}
          />
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
      </Fragment>}
    </Grid>
    
  )
}

export default QRvalidation
