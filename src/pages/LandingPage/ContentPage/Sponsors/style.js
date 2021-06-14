import { makeStyles } from '@material-ui/core'


export const useSponsorsStyles = makeStyles(() => ({
  title : {
    textAlign: 'center',
    color: '#002060',
    marginTop : '10px',
    fontSize: '24px'
  },
  containerCds:{
    width: '100%',
    paddingTop :'10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    'flex-wrap': 'wrap'
  },
  boxCds:{
    width: '40%',
    border: '1px solid #46c2ad',
    marginLeft: '10px',
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '30px',
    fontSize: '0.7rem'
  },
  containerImageCds : {
    width: '100%'
  },
  imageMinCiencias: {
    top: '-20px',
    height: '50px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
  },
  imageSena: {
    top: '-36px',
    height: '70px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
  },
  textMinCiencias:{
    position: 'relative',
    top: '-20px',
    textAlign: 'justify',
    margin: '20px',
    'flex-wrap': 'wrap',
    fontSize: '16px'
  },
  textSena:{
    position: 'relative',
    top: '-48px',
    textAlign: 'justify',
    margin: '20px',
    'flex-wrap': 'wrap',
    fontSize: '16px'
  },
  questionSena:{
    top: '-10px',
    margin: '0 auto',
    display: 'block',
    position: 'relative',
    background: '#fff',
    height: '60px',
    width: '150px',
    textAlign: 'center',
    color: '#002060',
    fontWeight: 'bold',
    fontSize: '18px',
    backgroundColor: '#FFF'
  },
  questionMin:{
    top: '-10px',
    margin: '0 auto',
    display: 'block',
    position: 'relative',
    background: '#fff',
    height: '60px',
    width: '300px',
    textAlign: 'center',
    color: '#002060',
    fontWeight: 'bold',
    fontSize: '18px',
    backgroundColor: '#FFF'
  }
}))