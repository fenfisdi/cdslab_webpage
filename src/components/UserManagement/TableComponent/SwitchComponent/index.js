import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'

export const ActiveComponent = ({isActive, role, user}) => {
  
  const [state, setState] = useState({isActive})
  
  const changeActive=()=>{
    user['is_enabled']=!user.is_enabled
  }
  
  const changeAdmin=()=>{
    if(user['role'] == 'admin'){
      user['role'] = 'user'
    }
    else{
      user['role'] = 'admin'
    }
  }

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.checked})
    if(role){
      changeAdmin()
    }
    else{
      changeActive()
    }
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