import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { useQrious } from 'react-qrious'

const QRImage = ({qrUrl}) => {

  const [value] = useState(qrUrl)
  const [dataUrl] = useQrious({ value, size: 300 })
  return (
    <>
      <Grid item xs={12}>
        <img src={dataUrl}/>
      </Grid>
    </>
  )
}
export default QRImage
