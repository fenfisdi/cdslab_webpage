import styled from 'styled-components'
import { KeyboardDatePicker } from '@material-ui/pickers'

export const StyledDatePicker = styled(KeyboardDatePicker)`
  & .MuiInput-root {
    height: 48px;
  }
  & {
    margin-top: 16px;
    input{
      text-align: center;
    }
  }
  
`
