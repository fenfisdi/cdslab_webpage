import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
export const usePredefinedModelsStyles = makeStyles(() => ({
  title:{
    fontSize:'18px',    
    fontWeight:'500'
  }
}))

export const CompartmentalPredefinedModelForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const CompartmentalPredefinedModelFormTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CompartmentalPredefinedModelFormInput= styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin-bottom:20px;
`