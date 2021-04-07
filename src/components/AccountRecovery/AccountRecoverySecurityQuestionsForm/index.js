import React, { Fragment, useEffect, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/theme'
import { TitleComponent } from '../../ui/Title'
import { useAccountRecoverySecurityQuestionsFormStyles } from './styles'
import { useAccountRecoverySecurityQuestionsFormState } from './state'

const securityQuestionsForm = ({ questions, loading }) => {
  const classes = useAccountRecoverySecurityQuestionsFormStyles(theme)
  const [isValid, setIsvalid] = useState(false)
  const fieldsData=useAccountRecoverySecurityQuestionsFormState()

  const{
    answer_one,
    answer_two
  }= fieldsData

  return(
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
        {!loading && <Fragment>
          <TitleComponent
            justify={'center'}
            alignItems={'center'}
            title={'Registro'}
            variant={'h5'}
          />

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <TitleComponent>{questions}</TitleComponent>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...answer_one}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="last name"
                {...answer_two}
              />
            </Grid>
          </Grid>

          <Button
            //onClick={handlerClick}
            variant="contained"
            color="primary"
            className={{}}
          >
        Continue
          </Button>
        </Fragment>}
      </Grid>
    </Paper>
  )
}

export default securityQuestionsForm