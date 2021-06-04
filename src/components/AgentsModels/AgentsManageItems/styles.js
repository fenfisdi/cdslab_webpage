import { makeStyles } from '@material-ui/core'

export const AgentsManageItemsStyles = makeStyles((theme) => ({
  titleContainer: {
    backgroundColor: '#E3E3E3',
    color: 'black'
  },

  manageItemsContainer: {
    width: '100%',
    color: theme.palette.secondary.cardFont,
    textAlign: 'center'
  },

  icon: {
    '&:hover': {
      cursor: 'pointer'
    }
  },

  inputClass: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '10px'
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
  }
}))