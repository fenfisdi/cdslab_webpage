import { useContext } from 'react'
import { useInputValue } from '../../ui/Input/useInputValue'
import {  VALIDATORS_ACCOUNT_RECOVERY_EMAIL_FORM } from './validators'
import {languageContext} from '../../../config/languageContext'

export const useAccountRecoveryEmailFormState = () => {
  const { t } = useContext(languageContext)
  /******* form fields  */
  const email = useInputValue('', VALIDATORS_ACCOUNT_RECOVERY_EMAIL_FORM.email, {
    name: 'email',
    type: 'email',
    label: t('registerPage.email'),
  })
  
  return {
    email,
  }

}