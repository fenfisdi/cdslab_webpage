import { useInputValue } from '../../ui/Input/useInputValue'
import { checkTypeNumber, VALIDATORS_REGISTER_FORM } from './validators'
import { useSelectValue } from '../../ui/Select/useSelectValue'

export const useRegisterFormState = () => {
  /******* form fields  */
  const email = useInputValue('', VALIDATORS_REGISTER_FORM.email, {
    name: 'email',
    type: 'email',
    label: 'Email',
    variant: 'outlined',
    margin: 'normal',
    autoComplete:'email'
  })
  const name = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'name',
    type: 'text',
    label: 'Name',
    variant: 'outlined',
    margin: 'normal',
  })
  const lastName = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    variant: 'outlined',
    margin: 'normal',
  })

  const genre = useSelectValue('', VALIDATORS_REGISTER_FORM.genre, {
    options: [
      {
        value: 'female',
        label: 'Female',
      },
      {
        value: 'male',
        label: 'male',
      },
      {
        value: 'other',
        label: 'other',
      },
    ],
    title: 'Gender',
  })

  const institution = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'institution',
    type: 'text',
    label: 'Institution',
    variant: 'outlined',
    margin: 'normal',
  })
  const institutionAfiliation = useInputValue(
    '',
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: 'institutionAfiliation',
      type: 'text',
      label: 'Institution Afiliation',
      variant: 'outlined',
      margin: 'normal',
    }
  )
  const profession = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'profession',
    type: 'text',
    label: 'Profession',
    variant: 'outlined',
    margin: 'normal',

  })
  const date_of_birth = useInputValue('', VALIDATORS_REGISTER_FORM.dateTime, {
    name: 'date_of_birth',
    type: 'date',
    label: 'birth date',
  })
  const phoneNumber = useInputValue('', VALIDATORS_REGISTER_FORM.phone, {
    name: 'phoneNumber',
    type: 'text',
    label: 'phone Number',
    variant: 'outlined',
    margin: 'normal',
    onKeyDown: (event) => {
      return checkTypeNumber(event)
    },
  })
  const phoneExtension = useInputValue('', VALIDATORS_REGISTER_FORM.ext, {
    name: 'phoneExtension',
    type: 'text',
    label: 'phone Extension',
    variant: 'outlined',
    margin: 'normal',
    onKeyDown: (event) => {
      return checkTypeNumber(event)
    },
  })
  const password = useInputValue('', VALIDATORS_REGISTER_FORM.password, {
    name: 'password',
    type: 'password',
    label: 'Password',
    variant: 'outlined',
    margin: 'normal',
  })

  return {
    email,
    password,
    name,
    lastName,
    phoneExtension,
    phoneNumber,
    date_of_birth,
    institution,
    institutionAfiliation,
    genre,
    profession
  }

}