import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

export const CustomSwitch = withStyles({
  root: {
    width: 42,
    height: 23,
    padding: 0,
    borderRadius:'30px',
    marginLeft:'10px' 
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      color: 'white',
    },
    '&$checked + $track': {
      backgroundColor: '#00838F',
      opacity: 0.9,
    },
  },
  checked: {},
  track: {},
})(Switch)