import { useInputValue } from '../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_ACCOUNT_RECOVERY_SECURYTI_CODE_FORM } from './validators'


export const useAccountRecoverySecurityCodeFormState = () => {
  /******* form fields  */
  const securityCode = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_SECURYTI_CODE_FORM.number, {
    name: 'securityCode',
    type: 'text',
    label: 'security code',
    onKeyDown: (event) => {
      return checkTypePhoneNumber(event)
    }
  })

  return {
    securityCode,
  }

}