import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FormGroup = styled(Paper)`
  width: 100%;
  background: white;
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  > div {
    margin: 10px;
    width: 100%;
  }
`
export const BoxSizeTitle = styled.h3`
  margin: 10px auto;
  
`
