import React from 'react'
import QRvalidation from '@components/QrForm/QRValidation'
import Grid from '@material-ui/core/Grid'

const QRAuthentication = () => {

  return (
    <Grid container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: '10%' }}
    >
      <h1>Hello</h1>
      <QRvalidation />
    </Grid>
  )
}

export default QRAuthentication