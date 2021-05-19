import React, {useState} from 'react'
import { Checkbox } from '@material-ui/core'

export const CheckBoxComponent = ({isActive}) => {
  const [state, setState] = useState({
    check: isActive,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Checkbox
      checked={state.check}
      onChange={handleChange}
      name="check"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    
  )
}