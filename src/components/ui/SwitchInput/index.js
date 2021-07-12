import React from 'react'
import { useSwitchInputStyle } from './styles'
import { Switch } from '@material-ui/core'

export const SwitchInput = (options) => {
  const classes = useSwitchInputStyle()
  
  return (
    <Switch
      className={classes.root} 
      {...options} />
  )
}
