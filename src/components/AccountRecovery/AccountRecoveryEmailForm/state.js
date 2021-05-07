import { useInputValue } from '../../ui/Input/useInputValue'
import {  VALIDATORS_ACCOUNT_RECOVERY_EMAIL_FORM } from './validators'


export const useAccountRecoveryEmailFormState = () => {
  /******* form fields  */
  const email = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_EMAIL_FORM.email, {
    name: 'email',
    type: 'email',
    label: 'Email',
  })
  
  return {
    email,
  }

}