import React, { Fragment, useEffect, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { useQrBindingRecoverySecurityQuestionsStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/cdslabTheme'
import { useQrBindingRecoverySecurityQuestionsState } from './state'
import {isEmpty} from 'lodash'



const QrBindingRecoverySecurityQuestions = ({loading, questions, handleEventEmitted }) => {
  const classes = useQrBindingRecoverySecurityQuestionsStyles(theme)
  const { fields } = useQrBindingRecoverySecurityQuestionsState({ numberQuestions: questions})
  const [isValid, setIsvalid] = useState(false)

   
  useEffect(() => {
    validateForm()
  }, [fields])

  
  const validateForm = () => {
    
    let isFormValid = true
    for (var key in fields) {
      
      isFormValid = fields[key].value?.length > 0 && fields[key].errors?.length > 0
      console.log(isFormValid)
      if(!isFormValid){
        break
      }
    }
    setIsvalid(isFormValid)
  }

  const handleClickButton = () => {
    let answers = []
    Object.keys(fields).map(function(key, index) {
      const itemAnswer = {
        question:'',
        answer: ''
        
      }
      itemAnswer.answer=fields[key].value
      itemAnswer.question=questions[index].question
      answers.push(itemAnswer)
    })
    handleEventEmitted({
      answers
    })
  }


  return (
    <Paper className={classes.formBody}>
      <Grid container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <Grid
            container
            spacing={3}
            justify='center'
          >
            {!isEmpty(fields) && questions.map((question, i) =>{
      
              return(
                <Grid key={`${question.question}`}
                  item
                  xs={12}
                  direction="row"
                >
                  <Grid
                    item
                    direction="column"
                  >
                    {question.question}
                  </Grid>
                  <Grid
                    item
                    direction="row"
                  >
                    <Input
                      disabled={loading}
                      required
                      fullWidth
                      variant='outlined'
                      margin='normal'
                      {...fields['answer'+i]}
                    />
                  </Grid>
                </Grid>
              )
            })}
            <Grid item container xs={12} justify="center" spacing={1}>
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
