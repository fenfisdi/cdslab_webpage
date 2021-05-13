import { makeStyles } from '@material-ui/core'


export const useModelsStyles = makeStyles(() => ({
  containerModels:{
    width: '100%',
    paddingTop :'10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    'flex-wrap': 'wrap'
  },
  boxModels:{
    width: '87%',
    border: '1px solid #46c2ad',
    marginLeft: '10px',
    marginTop: '15px',
    marginRight: '10px',
    marginBottom: '20px',
    fontSize: '0.7rem'
  },
  question:{
    top: '-30px',
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
  divModels:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  textModels:{
    top: '-40px',
    margin: '20px',
    position: 'relative',
    'flex-wrap': 'wrap',
    textAlign: 'justify',
    width: '60%',
    fontSize: '0.7rem'
  },
  divModelsImg:{
    width: '40%',
    position: 'relative'
  },
  imgSteps:{
    width: '100%',
    display: 'block',
    margin: '0 auto'
  }
}))