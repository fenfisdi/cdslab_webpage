import { makeStyles } from '@material-ui/core'

export const useAgentsModalConstantStyles = makeStyles(() => ({
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  },
  text:{
    fontSize:'17px',
    fontWeight:'600',
    marginRight:'20px'
  },
  title:{
    color:'#006064',
    fontSize:'20px',
    fontWeight: 500
  }
}))