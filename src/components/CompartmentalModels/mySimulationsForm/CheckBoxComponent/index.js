import React, {useState} from 'react'
import { Checkbox } from '@material-ui/core'

export const CheckBoxComponent = ({row,handleCheck}) => {

  const [state, setState] = useState({
    check: row.check,
  })

  const handleChange = (event) => {
    handleCheck(row)
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