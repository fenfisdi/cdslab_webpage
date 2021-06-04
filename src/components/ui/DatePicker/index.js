import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'
import enLocale from 'date-fns/locale/en-US'
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { StyledDatePicker } from './styles'

const DatePicker = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={props?.lenguaje =='es' ? esLocale :enLocale}>
      <StyledDatePicker
        {...props}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
