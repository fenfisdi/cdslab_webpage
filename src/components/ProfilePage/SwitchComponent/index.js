import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const ActiveComponent = ({isActive, label, user}) => {
  
  const [state, setState] = useState({isActive})
  
  const changeNotifications = () =>{
    if(label == 'Notify me when a simulation finishes'){
      user['notify_simulation_done'] = !user.notify_simulation_done
    }
    if(label == 'Notify me before file removal'){
      user['notify_removal'] = !user.notify_removal
    }
  }
  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.checked})
    changeNotifications()
  }

  return (
    <FormControlLabel
      control={<Switch checked={state.isActive} onChange={handleChange} name='isActive' color="primary"/>}
      label={label}
      labelPlacement='start'
    />
  )
}