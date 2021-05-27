import { makeStyles } from '@material-ui/core'

export const sysManagementStyles = makeStyles((theme) => ({
  sysManagementTableContainer: {
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '7px',
    border: '1px solid #E3E3E3'
  },

  sysManagementTabsContainer: {
    marginTop: '20px'
  },

  inputClass: {
    width: '70px'
  },

  generalContainer: {
    marginTop: '10px'
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

  toolbarClass: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: 'white'
  },

  buttonClass: {
    backgroundColor: '#E3E3E3',
    marginLeft: '7px',
    marginBottom: '7px'
  },

  paper: {
    padding: '10px',
    border: '1px solid #E3E3E3'
  },

  editorClass: {
    height: '100px'
  },

  button: {
    margin: theme.spacing(1)
  },

  buttonContainer: {
    textAlign: 'center'
  }
}))