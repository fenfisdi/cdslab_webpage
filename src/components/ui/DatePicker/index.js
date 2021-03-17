import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { StyledDatePicker } from './styles'

const DatePicker = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <StyledDatePicker
        {...props}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
