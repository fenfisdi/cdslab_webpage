import { makeStyles } from '@material-ui/core/styles'

export const useCompartmentalButtonStyles = makeStyles(() => ({
  text:{
    color:'#44605D',
    '&.disabled':{
      color:'rgba(0, 0, 0, 0.26)'
    }
  },
  button:{
    '&.disabled':{
      backgroundColor:'rgb(197 181 181 / 14%)'
    }
    
  },
  body:{
    marginTop:'50px'
  }
}))
