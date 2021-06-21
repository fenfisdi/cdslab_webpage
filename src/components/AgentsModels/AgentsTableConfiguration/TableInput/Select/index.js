import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  select: {
    margin: theme.spacing(1),
    minWidth: 150
  }
}))

export default function TableSelect({
  name,
  value = '',
  options = [],
  onChange
}) {
  const classes = useStyles()

  return (
    <Select
      className={classes.select}
      name={name}
      value={value}
      onChange={onChange}
      displayEmpty
    >
      <MenuItem value="" disabled>
        <em>Select an option</em>
      </MenuItem>
      {options.map((opt, i) => (
        <MenuItem key={i} value={opt.key}>
          {opt.value}
        </MenuItem>
      ))}
    </Select>
  )
}
