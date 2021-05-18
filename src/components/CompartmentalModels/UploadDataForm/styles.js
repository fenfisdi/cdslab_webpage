import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

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




export const UploadDataFormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;`


export const UploadDataFormTitle= styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top:20px;
  margin-bottom:20px;
  `
  