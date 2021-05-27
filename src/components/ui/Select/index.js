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
    'box-shadow': '0px 4px 5px 2px rgb(0 0 0 / 42%)',
    color: '#006064',    
    'background': '#E0F3FA'
  }
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
