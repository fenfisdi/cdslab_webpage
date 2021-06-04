import { makeStyles } from '@material-ui/core'


export const useScopeStyles = makeStyles(() => ({
  title : {
    textAlign: 'center',
    color: '#002060',
    marginTop : '10px',
    fontSize: '24px'
  },
  containerScope:{
    width: '100%',
    paddingTop :'10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    'flex-wrap': 'wrap'
  },
  boxScope:{
    width: '40%',
    border: '1px solid #46c2ad',
    marginLeft: '10px',
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '30px',
    fontSize: '0.7rem'
  },
  question:{
    top: '-30px',
    margin: '0 auto',
    display: 'block',
    position: 'relative',
    background: '#fff',
    height: '60px',
    width: '150px',
    textAlign: 'center',
    color: '#002060',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  textScope:{
    top: '-40px',
    margin: '20px',
    position: 'relative',
    'flex-wrap': 'wrap',
    textAlign: 'justify',
    fontSize: '16px'
  },
  divScopeImg:{
    width: '100%',
    top: '-30px',
    position: 'relative'
  },
  imgPadlock:{
    width: '10%',
    display: 'block',
    margin: '0 auto'
  },
  imgOpenSource:{
    width: '13%',
    display: 'block',
    margin: '0 auto'
  },
  imgPython:{
    width: '100%',
  },
  scopeLink:{
    width: '200px',
    height: 'auto',
    'word-wrap': 'break-word',
    display: 'initial'
  },
  divImgPython:{
    width: '20%',
    display: 'inline-flex',
    float: 'right'
  }
}))