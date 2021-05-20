import { useContext } from 'react'
import { useInputValue } from '../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_REGISTER_FORM } from './validators'
import { usePhoneNumberValue } from '../../ui/PhoneNumber/usePhoneNumberValue'
import { languageContext } from '../../../config/languageContext'

export const useRegisterFormState = () => {
  const {t} = useContext(languageContext)
  /******* form fields  */
  const email = useInputValue('', VALIDATORS_REGISTER_FORM.email, {
    name: 'email',
    type: 'email',
    label: t('registerPage.email'),
  })
  const name = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'name',
    type: 'text',
    label: t('registerPage.name'),
  })
  const lastName = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: t('registerPage.lastName'),
  })


  const institution = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'institution',
    type: 'text',
    label: t('registerPage.institution'),
  })
  const institutionAffiliation = useInputValue(
    '',
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: 'institutionAffiliation',
      type: 'text',
      label: t('registerPage.institutionAffiliation'),
    }
  )
  const profession = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'profession',
    type: 'text',
    label: t('registerPage.profession'),
  })
  const securityQuestion1 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security question 1',
    type: 'text',
    label: t('registerPage.securityQuestion1'),
  })
  const securityQuestion2 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security quetion 2',
    type: 'text',
    label: t('registerPage.securityQuestion2'),
  })
  const securityAnswer1 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security answer 1',
    type: 'text',
    label: t('registerPage.answerQuestion1'),
  })
  const securityAnswer2 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security answer 2',
    type: 'text',
    label: t('registerPage.answerQuestion2'),
  })
  const dateBirth = useInputValue('', VALIDATORS_REGISTER_FORM.dateTime, {
    name: 'dateBirth',
    type: 'date',
    label: t('registerPage.birthDate'),
  })
  const phoneNumber = usePhoneNumberValue('', VALIDATORS_REGISTER_FORM.phone, {
    name: 'phoneNumber',
    type: 'text',
    label: t('registerPage.phoneNumber'),
    onKeyDown: (event) => {
      return checkTypePhoneNumber(event)
    }
  })
  
  const password = useInputValue('', VALIDATORS_REGISTER_FORM.password, {
    name: 'password',
    type: 'password',
    label: t('registerPage.password'),
  })

  return {
    name,
    lastName,
    email,
    dateBirth,
    phoneNumber,
    institution,
    institutionAffiliation,
    profession,
    password,
    securityQuestion1,
    securityQuestion2,
    securityAnswer1,
    securityAnswer2
  }
}
