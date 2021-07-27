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
  selectForm:{
    'box-shadow': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    color: '#006064',    
    'background': '#E0F3FA'
  }
}))

export const SelectComponent = ({
  name='',
  xs,
  value,
  options = [],
  title,
  onChange,
  onOpen,
  onClose,
  errors,
  helperText
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
          name={name}
          label={title}
          id={`selectComponent-simple-${title}`}
          value={value || ''}
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
          className={classes.selectForm}
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
