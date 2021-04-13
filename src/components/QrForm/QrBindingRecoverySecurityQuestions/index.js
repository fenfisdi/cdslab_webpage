import React, { Fragment, useEffect, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { useQrBindingRecoverySecurityQuestionsStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/theme'
import { TitleComponent } from '../../ui/Title'
import { useQrBindingRecoverySecurityQuestionsState } from './state'


const QrBindingRecoverySecurityQuestions = ({ loading, questions=[], handleEventEmitted}) => {
  const classes = useQrBindingRecoverySecurityQuestionsStyles(theme)
  const { fields } = useQrBindingRecoverySecurityQuestionsState({numberQuestions:questions.length})
  const [isValid, setIsvalid] = useState(false)

  
  useEffect(()=>{
    let notIsValid = false
    for(var key in fields) {
      if(
        (fields[key] && !fields[key].value.length>0) || 
        (fields[key] && Array.isArray(fields[key].errors) && fields[key].errors.length>0)
      ){        
        notIsValid = true        
      }
    }
    setIsvalid(notIsValid)
  },[fields])


  const handleClickButton = () => {    
    let answers=[]
    for(var key in fields) {
      answers.push(fields[key].value)
    }
    handleEventEmitted({
      answers
    })
    
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>          
          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"            
          >
            {questions.map((value,index)=>{
              return (
                <Grid item container xs={(12/questions.length)} key={index}>
                  <TitleComponent
                    justify={'center'}
                    alignItems={'center'}
                    title={value}
                    variant={'h6'}
                    key={index}
                  />
                  <Grid item container xs={12}>
                    <Input
                      disabled={false}
                      required
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      autoComplete="name"
                      {...fields['answer'+index]}  
                    />
                  </Grid> 
                </Grid>
              )
            })}
            
          
            <Grid item container xs={12} justify="flex-end" spacing={1}>
              <Button variant="contained" color="default" style={{ 'margin-right': '6px' }}>
                Cancelar
              </Button>
              <Button
                onClick={handleClickButton}
                variant="contained"
                color="primary"
                className={{}}
                disabled={!isValid ? false : true}
              >
                Continue
              </Button>
            </Grid> 
          </Grid>
        </Fragment>}

      </Grid>
    </Paper>
  )
}

export default QrBindingRecoverySecurityQuestions
