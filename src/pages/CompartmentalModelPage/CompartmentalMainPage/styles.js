import { makeStyles } from '@material-ui/core/styles'

export const useCompartmentalMainPageStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '10px',
    marginBottom: '20px',
    padding: theme.spacing(2),
    'box-shadow': '1px 3px 9px 5px rgba(0,0,0,0.14)',
    background: 'rgba(61, 179, 158, 0.18)',
    fontWeight:'500',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  loading: {
    'min-height': ' 500px',
    'align-items': 'center'
  }
}))
