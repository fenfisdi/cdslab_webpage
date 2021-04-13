import { makeStyles } from '@material-ui/core/styles'

export const useParametersFormStyle = makeStyles(() => ({
  helperText: {
    '&.error':{
      margin: 0,
      'font-size': '0.90rem',
      'margin-top': '3px',
      'text-align':' left',
      'font-family':' "Roboto", "Helvetica", "Arial", sans-serif',
      'font-weight':' 400',
      'line-height':' 1.66',
      'letter-spacing':' 0.03333em',
    }
  }
}))
