import React from 'react'
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '8px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export const SelectComponent = ({
  xs,
  value,
  options = [],
  title,
  onChange,
  onOpen,
  onClose,
  errors,
  helperText,
}) => {
  const classes = useStyles()

  return (
    <Grid xs={xs} container item>
      <FormControl
        className={classes.formControl}
        error={errors}
        variant="outlined"
      >
        <InputLabel htmlFor="selectComponent">{title}</InputLabel>
        <Select
          label={title}
          id={`selectComponent-simple-${title}`}
          value={value}
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
        >
          {options.map((option) => {
            const { value: optionValue, label } = option
            return <MenuItem key={optionValue} value={optionValue}>{label}</MenuItem>
          })}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Grid>
  )
}
