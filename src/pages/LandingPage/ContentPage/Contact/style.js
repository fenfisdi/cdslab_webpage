import { makeStyles } from '@material-ui/core'


export const useContactStyles = makeStyles(() => ({
  containerContact:{
    width: '100%',
    paddingTop :'10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    'flex-wrap': 'wrap'
  },
  boxContact:{
    width: '50%',
    border: '1px solid #46c2ad',
    marginLeft: '10px',
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '80px',
    fontSize: '0.7rem'
  },
  question:{
    top: '-20px',
    margin: '0 auto',
    display: 'block',
    position: 'relative',
    background: '#fff',
    height: '60px',
    width: '130px',
    textAlign: 'center',
    color: '#002060',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  divContact:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  textContact:{
    top: '-40px',
    margin: '20px',
    position: 'relative',
    textAlign: 'left',
    width: '100%',
    fontSize: '0.8rem'
  },
  textBold:{
    fontWeight: 'bold',
    display: 'inline-flex'
  },
  textEmail:{
    color: 'blue',
    display: 'inline-flex'
  }
}))