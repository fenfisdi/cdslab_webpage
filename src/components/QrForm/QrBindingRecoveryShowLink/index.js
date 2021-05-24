import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import { TitleComponent } from '../../ui/Title'
import QRImage from '../QRcode'
import { languageContext } from '../../../config/languageContext'

const QrBindingRecoveryShowLink = ({qrUrl, title, handleClick}) => {

  const { t } = useContext(languageContext)
  return (
    <Grid
      item
      container
      xs={6}
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <TitleComponent
        justify='center'
        alignItems='center'
        title={title}
        variant='h5'
      />

      <QRImage qrUrl={qrUrl}/>

      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        {t('common.continueButton')}
      </Button>
    </Grid>
  )
}

export default QrBindingRecoveryShowLink
