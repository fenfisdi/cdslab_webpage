import React, { Fragment, useEffect, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { useQrBindingRecoverySecurityQuestionsStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/cdslabTheme'
import { useQrBindingRecoverySecurityQuestionsState } from './state'


const QUESTIONS=[
  { 'question': 'nombre perro' },
  { 'question': 'nombre mascota' }
]

const QrBindingRecoverySecurityQuestions = ({ loading, questions, handleEventEmitted }) => {
  const classes = useQrBindingRecoverySecurityQuestionsStyles(theme)
  const { fields } = useQrBindingRecoverySecurityQuestionsState({ numberQuestions: QUESTIONS.length})
  const [isValid, setIsvalid] = useState(false)
  const [internalQuestions, setInternalQuestions] = useState(QUESTIONS)
  const [questionsFields, setQuestionsFields] = useState(()=>{}) 

  useEffect(() =>{
    console.log(1)
    console.log(questions)
  },[])
   
  useEffect(() => {
    console.log(2)
    console.log(questions)
    validateForm()
  }, [fields])
 
  useEffect(() =>{
    if(questions?.length > 0){
      setInternalQuestions(questions)
    }
    renderQuestions()
  },[questions])

  const validateForm = () => {
    console.log(fields)
    let isFormValid = true
    for (var key in fields) {

      isFormValid = fields[key].value?.length > 0 && fields[key].errors?.length > 0
      if(!isFormValid){
        break
      }
    }
    setIsvalid(isFormValid)
  }

  const handleClickButton = () => {
    let answers = []
    for (var key in fields) {
      answers.push(fields[key].value)
    }
    console.log({answers})
    console.log({fields})
    handleEventEmitted({
      answers
    })
  }

  const renderQuestions =  () =>{
    if(fields==={}){
      return
    }
    const questionsToRender = internalQuestions? internalQuestions.map((question, i) =>{
      
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
    })
      : null
    setQuestionsFields(questionsToRender)
    return (questionsToRender)
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
            {questionsFields}
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
