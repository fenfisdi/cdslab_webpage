import React, {useState, useEffect} from 'react'
import Switch from '@material-ui/core/Switch'

export const ActiveComponent = ({isActive, list}) => {
  
  const [state, setState] = useState({isActive})

  const changeActive=()=>{
    if(isActive==true){
      isActive=false
    }
    else{
      isActive=true
    }
    console.log(isActive)
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked})
    changeActive()
  }

  return (
    <Switch
      checked={state.isActive}
      onChange={handleChange}
      color="primary"
      name="isActive"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}