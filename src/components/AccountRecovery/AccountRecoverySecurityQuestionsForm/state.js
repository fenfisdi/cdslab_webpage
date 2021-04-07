import { useInputValue } from '../../ui/Input/useInputValue'
import {  VALIDATORS_ACCOUNT_RECOVERY_SECURITY_QUESTIONS_FORM } from './validators'


export const useAccountRecoverySecurityQuestionsFormState = () => {
  /******* form fields  */
  const answer_one = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_SECURITY_QUESTIONS_FORM.answer_one, {
    name: 'answer 1',
    type: 'answer 1',
    label: 'Answer',
  })

  const answer_two = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_SECURITY_QUESTIONS_FORM.answer_one, {
    name: 'answer 2',
    type: 'answer 2',
    label: 'Answer',
  })

  return {
    answer_one,
    answer_two
  }

}