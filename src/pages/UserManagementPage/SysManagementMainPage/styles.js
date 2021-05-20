import { makeStyles } from '@material-ui/core'

export const sysManagementStyles = makeStyles({
  sysManagementTableContainer: {
    marginTop: '20px',
    marginBottom: '20px'
  },

  sysManagementTabsContainer: {
    marginTop: '20px'
  },

  root: {
    width: '120px',
    backgroundColor: '#E3E3E3',
    color: '#A3A3A3',
    borderTopLeftRadius: '7px',
    borderTopRightRadius: '7px',

    '&:focus': {
      backgroundColor: '#CFCFCF',
      color: 'black'
    }
  },
})