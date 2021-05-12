import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'

export const LandingPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
0  width: 100%;
  background: #fff
`

export const useHeaderStyles = makeStyles(() => ({
  container: {
    width : '100%'
  },
  image :{
    width: '100%',
    height: '100px'
  }
}))

export const useContentStyles = makeStyles(() => ({
  title : {
    textAlign: 'center',
    color: '#002060',
    marginTop : '10px'
  },
  storyText:{
    paddingTop: '5px',
    width: '90%',
    textAlign: 'justify',
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
  containerImageCds : {
    width: '100%'
  },
  image: {
    height: '150px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    top: '-80px'
  },
  textCds:{
    position: 'relative',
    top: '-80px',
    textAlign: 'center',
    margin: '20px',
    'flex-wrap': 'wrap',
    fontSize: '0.7rem'
  }
}))