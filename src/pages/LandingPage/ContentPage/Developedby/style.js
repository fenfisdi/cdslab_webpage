import { makeStyles } from '@material-ui/core'


export const useDevelopedByStyles = makeStyles(() => ({
  title : {
    textAlign: 'center',
    color: '#002060',
    marginTop : '10px',
    fontSize: '24px'
  },
  storyText:{
    fontSize: '13px',
    paddingTop: '5px',
    width: '90%',
  },
  divDeveloped:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  textDeveloped:{
    margin: '20px',
    position: 'relative',
    'flex-wrap': 'wrap',
    textAlign: 'justify',
    width: '70%',
    fontSize: '16px'
  },
  divDevelopedImg:{
    width: '20%',
    position: 'relative'
  },
  imgDeveloped:{
    width: '100%',
    display: 'block',
    margin: '0 auto'
  }
}))