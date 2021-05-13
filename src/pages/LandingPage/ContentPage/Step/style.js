import { makeStyles } from '@material-ui/core'


export const useStepStyles = makeStyles(() => ({
  containerStep:{
    width: '100%',
    paddingTop :'10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    'flex-wrap': 'wrap'
  },
  boxStep:{
    width: '87%',
    border: '1px solid #46c2ad',
    marginLeft: '10px',
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '20px',
    fontSize: '0.7rem'
  },
  question:{
    top: '-15px',
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
  divStep:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  divStepImg:{
    width: '100%',
    position: 'relative',
    top: '-30px'
  },
  imgSteps:{
    width: '85%',
    display: 'block',
    margin: '0 auto'
  }
}))