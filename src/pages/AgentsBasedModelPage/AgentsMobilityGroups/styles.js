import { makeStyles } from '@material-ui/core'

export const AgentsMobilityGroupsStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: '#E3E3E3',
    color: 'black'
  },

  manageItemsContainer: {
    marginTop: '10%',
    width: '100%',
    color: theme.palette.secondary.cardFont,
    textAlign: 'center'
  },

  inputClass: {
    width: '100%',
    backgroundColor: 'white'
  },

  addButton: {
    marginTop: '10px',
    backgroundColor: '#E3E3E3',
    color: theme.palette.secondary.cardFont,
    display: 'flex'
  },

  iconClass: {
    marginTop: '45%',
    width: '30px',
    height: '30px'
  },

  indexClass: {
    marginTop: '50%'
  },

  itemContainerClass: {
    marginTop: '10px',
    borderRadius: '10px',
    backgroundColor: '#E3E3E3',
    paddingBottom: '5px'
  },

  buttonContainer: {
    marginTop: '20%'
  }
}))