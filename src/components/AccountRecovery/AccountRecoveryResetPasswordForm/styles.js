import { makeStyles } from '@material-ui/core/styles'

export const useAccountRecoveryResetPasswordFormStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '10px',
    marginBottom: '20px',
    padding: theme.spacing(2),
    'box-shadow': '1px 3px 9px 5px rgba(0,0,0,0.14)',
    background: '#ffffff',
    height: '100%',
    overflow: 'hidden',
    width: '50%',
  },
  formEmail:{
    marginTop:'10px'
  },
  loading:{
    'min-height':' 500px',
    'align-items': 'center'
  }
}))
