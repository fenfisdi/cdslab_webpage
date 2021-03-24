import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useQrious } from 'react-qrious'

const QRImage = () => {
    const [value] = useState('otpauth://totp/Secure%20App:alice%40google.com?secret=JBSWY3DPEHPK3PXP&issuer=Secure%20App')
    const [dataUrl] = useQrious({ value, size: 300 })
    return (
        <>
            <Grid item xs={12}>
                <img src={dataUrl}/>
            </Grid>
        </>
    )
}
export default QRImage;
