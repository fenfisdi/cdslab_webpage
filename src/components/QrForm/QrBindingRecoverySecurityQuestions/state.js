import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS } from './validators'
import {useEffect, useState} from 'react'


export const useQrBindingRecoverySecurityQuestionsState = ({numberQuestions}) => {
  /******* form fields  */
  const [fields, setFields] = useState()

  useEffect(()=>{
    const fieldsAux = buildFields()
    setFields(fieldsAux)

  }, [numberQuestions])
  
  const buildFields=()=>{
    const fieldsAux = {}
    for (let index = 0; index < numberQuestions; index++) {
      const email = useInputValue('', VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS.alphabetic, {
        name: 'answer'+index,
        type: 'text',
        label: 'answer',
      })
      fieldsAux['answer'+index]=email
    }
    return fieldsAux
  }
   
  return {fields}
}