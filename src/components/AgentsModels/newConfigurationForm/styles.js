import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const AgentNameConfigurationFormInput= styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 80%;
  margin-bottom:20px;
  background-color: #EBF5F6;
  padding: 20px;
  border: 1px solid #E5E5E5;
  border-radius: 7px;
`
export const AgentsModelForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AgentsModelContainerInputsForm = styled.section`
  display: block;
  margin: 0 auto;
  width: 80%;
  display: inline-flex;
`

export const AgentsModelCenterInputsForm = styled.section`
  width: 50%;
  padding: 10px;
`

export const useNewConfigurationStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '50px' 
  },
  buttonSearch: {
    float: 'rigth',
  },
  selectComponent: {
    border: '1px solid #fff',
  }
}))
