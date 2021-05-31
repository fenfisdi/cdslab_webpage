import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS } from './validators'


export const useQrBindingRecoverySecurityQuestionsState = ({numberQuestions}) => {
  /******* form fields  */
  
  const buildFields=()=>{
    const fieldsAux = {}
    for (let index = 0; index < numberQuestions.length; index++) {
      const email = useInputValue('', VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS.alphabetic, {
        name: 'answer'+index,
        type: 'text',
        label: 'answer',
      })
      fieldsAux['answer'+index]=email
    }
    return fieldsAux
  }
  
  return {fields: buildFields()}
}