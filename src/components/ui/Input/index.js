import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useInputStyle } from './styles'

export const Input = (options) => {
  const classes = useInputStyle()

  return (
    <TextField
      className={classes.root}
      error={!!(options.helperText) || ( options.errors && options.errors.length>0)}
      {...options}
    />
  )
}
