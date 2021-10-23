import { makeStyles } from '@material-ui/core'

const naturalHistoryStyles = makeStyles(( theme ) => ({

  cell:{
    backgroundColor: theme.palette.action.hover,
  },

  head:{
    padding: theme.spacing(2),
    backgroundColor: theme.palette.action.focus
  }

}))

export default naturalHistoryStyles