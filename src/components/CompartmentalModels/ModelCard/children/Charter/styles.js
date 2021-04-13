import { makeStyles } from '@material-ui/core'

export const useCharterStyles = makeStyles({
  root: {
    minWidth: 275,
    marginRight:'30px',
    marginLeft:'30px',
    backgroundColor:'#66C2C1',
    color: '#FFFFFF',
    display:'flex',
    justifyContent:'center',
    paddingBottom:'35px',
    '&:hover':{
      cursor: 'pointer'
    },
    '&.selected':{
      backgroundColor:'#b3cccb',
      boxShadow: '0px 3px 6px #00000029',
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})