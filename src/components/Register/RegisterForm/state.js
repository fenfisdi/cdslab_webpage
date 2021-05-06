import { useInputValue } from '../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_REGISTER_FORM } from './validators'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { usePhoneNumberValue } from '../../ui/PhoneNumber/usePhoneNumberValue'

export const useRegisterFormState = () => {
  /******* form fields  */
  const email = useInputValue('', VALIDATORS_REGISTER_FORM.email, {
    name: 'email',
    type: 'email',
    label: 'Email',
  })
  const name = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'name',
    type: 'text',
    label: 'Name',
  })
  const lastName = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
  })

  const genre = useSelectValue('', VALIDATORS_REGISTER_FORM.genre, {
    options: [
      {
        value: 'F',
        label: 'Female',
      },
      {
        value: 'M',
        label: 'Male',
      },
    ],
    title: 'Gender',
  })

  const institution = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'institution',
    type: 'text',
    label: 'Institution',
  })
  const institutionAffiliation = useInputValue(
    '',
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: 'institutionAffiliation',
      type: 'text',
      label: 'Institution Affiliation',
    }
  )
  const profession = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'profession',
    type: 'text',
    label: 'Profession',
  })
  const securityQuestion1 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security question 1',
    type: 'text',
    label: 'security question 1',
  })
  const securityQuestion2 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security quetion 2',
    type: 'text',
    label: 'security question2',
  })
  const securityAnswer1 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security answer 1',
    type: 'text',
    label: 'security answer 1',
  })
  const securityAnswer2 = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'security answer 2',
    type: 'text',
    label: 'security answer 2',
  })
  const dateBirth = useInputValue('', VALIDATORS_REGISTER_FORM.dateTime, {
    name: 'dateBirth',
    type: 'date',
    label: 'birth date',
  })
  const phoneNumber = usePhoneNumberValue('', VALIDATORS_REGISTER_FORM.phone, {
    name: 'phoneNumber',
    type: 'text',
    label: 'phone Number',
    onKeyDown: (event) => {
      return checkTypePhoneNumber(event)
    }
  })
  
  const password = useInputValue('', VALIDATORS_REGISTER_FORM.password, {
    name: 'password',
    type: 'password',
    label: 'Password',
  })

  return {
    name,
    lastName,
    email,
    dateBirth,
    phoneNumber,
    genre,
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