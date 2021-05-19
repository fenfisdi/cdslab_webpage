import { makeStyles } from '@material-ui/core/styles'

export const useTableComponentStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '100%',
  },

}))