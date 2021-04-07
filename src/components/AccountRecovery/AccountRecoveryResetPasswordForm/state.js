import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_ACCOUNT_RECOVERY_RESET_PASSWORD_FORM } from './validators'


export const useAccountRecoveryResetPasswordFormState = () => {
  /******* form fields  */
  const password = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_RESET_PASSWORD_FORM.password, {
    name: 'password',
    type: 'password',
    label: 'Password',
  })

  return {
    password,
  }

}