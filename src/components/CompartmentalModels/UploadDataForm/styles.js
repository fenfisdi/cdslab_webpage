import { makeStyles } from '@material-ui/core/styles'

export const useUploadDataFormStyles = makeStyles(() => ({  
  paragraph:{
    marginBottom:'10px', 
    fontWeight:'500', 
    fontSize:'16px',
    '&.sub':{
      fontSize:'13px',
    }
  }
}))