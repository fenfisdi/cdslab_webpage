import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { languageContext } from '../../../config/languageContext'

const SuccessRegister =() =>{

  const { t } = useContext(languageContext)
  return(
    <Grid container 
      direction="column" 
      alignItems="center"
      justify="center"
      style={{ marginTop: '10%' }}
    >
      <h1>{t('successRegister')}</h1>
    </Grid>
  )
}

export default SuccessRegister
