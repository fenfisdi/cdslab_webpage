import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'

export const ActiveComponent = ({isActive, user}) => {
  
  const [state, setState] = useState({isActive})
  
  const changeActive=()=>{
    user['is_enabled']=!user.is_enabled
  
  }

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.checked})
    changeActive()
  }

  return (
    <Switch
      checked={state.isActive}
      onChange={(event)=>{handleChange(event)}}
      color="primary"
      name="isActive"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}