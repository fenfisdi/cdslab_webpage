import { makeStyles } from '@material-ui/core'

export const agentAgeGroupsStyles = makeStyles((theme) => ({
  ageContainer:{
    textAlign: 'center',
    marginTop: '30%'
  },

  ageTitlesContainer:{
    backgroundColor: '#E3E3E3'
  },

  ageItemContainer: {
    color: theme.palette.secondary.cardFont,
    marginTop: '10px',
    borderRadius: '10px',
    backgroundColor: '#E3E3E3',
    paddingBottom: '5px'
  },

  inputClass: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: '10px'
  },

  indexClass: {
    marginTop: '50%'
  },

  iconClass: {
    marginTop: '45%',
    width: '30px',
    height: '30px'
  },

  addButton: {
    marginTop: '10px',
    backgroundColor: '#E3E3E3',
    color: theme.palette.secondary.cardFont
  },

  buttonContainer: {
    marginTop: '20%'
  }
}))