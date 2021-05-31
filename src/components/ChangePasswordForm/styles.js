import { makeStyles } from '@material-ui/core/styles'

export const useChangePasswordFormStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '70px',
    marginBottom: '10px',
    padding: theme.spacing(2),
    'box-shadow': '1px 3px 9px 5px rgba(0,0,0,0.14)',
    background: '#ffffff',
    height: '100%',
    overflow: 'hidden',
    width: '70%',
  },
  loading:{
    'min-height':' 700px',
    'align-items': 'center'
  }
}))