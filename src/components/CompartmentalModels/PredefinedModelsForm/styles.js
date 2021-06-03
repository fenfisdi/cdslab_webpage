import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
export const usePredefinedModelsStyles = makeStyles((theme) => ({
  title:{
    ...theme.font.subtitle
  },Input:{
    background:'#ebf5f6',
    '& div':{
      background:'white'
    }
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
  margin-bottom: 20px;
`

export const CompartmentalPredefinedModelFormInput= styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 40%;
  margin-bottom:20px;
  background-color: #EBF5F6;
  padding: 20px;
  border: 1px solid #E5E5E5;
  border-radius: 7px;
`