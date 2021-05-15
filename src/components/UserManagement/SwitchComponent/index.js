import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'

export default function ActiveComponent() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
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