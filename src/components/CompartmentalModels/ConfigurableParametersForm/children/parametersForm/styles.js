import styled from 'styled-components'


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
  `

export const ParametersFormBodyItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `

export const ParametersFormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;`