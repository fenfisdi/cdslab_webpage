import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS } from './validators'


export const useQrBindingRecoverySecurityQuestionsState = ({numberQuestions}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < numberQuestions; index++) {
    const email = useInputValue('', VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS.alphabetic, {
      name: 'answer'+index,
      type: 'text',
      label: 'answer',
    })
    fields['answer'+index]=email
      
  } 

  return {fields}
}