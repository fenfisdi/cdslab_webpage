import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
export const useParametersFormStyle = makeStyles(() => ({
  helperText: {
    '&.error':{
      margin: 0,
      'font-size': '0.90rem',
      'margin-top': '3px',
      'text-align':' left',
      'font-family':' "Roboto", "Helvetica", "Arial", sans-serif',
      'font-weight':' 400',
      'line-height':' 1.66',
      'letter-spacing':' 0.03333em',
    }
  },
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  }
}))

export const ParametersFormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background:#CFD8DC; 
  margin-top:10px;
  padding:10px;
  `
export const ParametersFormHeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:${props => props.justifyContent};
  align-items:${props => props.alignItems};
  width: 100%;
  font-weight:400;
  color:#000000;
  & span{
    margin-right: 15px;
  }
  `

export const ParametersFormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;`