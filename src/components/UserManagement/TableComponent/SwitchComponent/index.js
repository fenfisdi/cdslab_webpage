import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'

export const ActiveComponent = ({isActive}) => {
  const [state, setState] = useState({
    checkedB: isActive,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Switch
      checked={state.checkedB}
      onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}