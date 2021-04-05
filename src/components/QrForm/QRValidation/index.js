import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Input } from '../../ui/Input'
import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_VALUE } from  './validators'
import LoaderComponent from '../../ui/Loader'

const QRvalidation = ({eventEmitter,loading}) => {
  
  const qrvalue = useInputValue('', VALIDATORS_QR_VALUE.qrvalue, {
    name: 'qrvalue',
    type: 'int',
    label: 'Code',
  })

  const handleClick = () => {
    eventEmitter({qrValue: qrvalue.value})
  }

  return(
    
    <Grid container justify="center" alignItems="center" direction="column">
      {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
      {!loading && <Fragment>
        <Grid item xs={12} style={{ marginTop: '2%' }}>
          <h4>Please entered your code below</h4>
        </Grid>
        <Grid item xs={2}>
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            {...qrvalue}
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
