import { makeStyles } from '@material-ui/core'


export const useStepStyles = makeStyles(() => ({
  title : {
    textAlign: 'center',
    color: '#002060',
    marginTop : '10px'
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
    marginTop: '45px',
    marginRight: '10px',
    marginBottom: '30px',
    fontSize: '0.7rem'
  },
  containerImageCds : {
    width: '100%'
  },
  imageLab: {
    height: '170px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    top: '-90px'
  },
  imageLib: {
    width: '195px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    top: '-73px'
  },
  textCdsLab:{
    position: 'relative',
    top: '-130px',
    textAlign: 'justify',
    margin: '20px',
    'flex-wrap': 'wrap',
    fontSize: '0.7rem'
  },
  textCdsLib:{
    position: 'relative',
    top: '-95px',
    textAlign: 'justify',
    margin: '20px',
    'flex-wrap': 'wrap',
    fontSize: '0.7rem'
  }
}))