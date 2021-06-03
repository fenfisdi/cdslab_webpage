import styled from 'styled-components'


export const CompartmentalChooseDateSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;`


export const CompartmentalChooseDateFormTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%
  & > p {
    fontWeight:'500';
    fontSize:'18px';
  }
`

export const CompartmentalChooseDateDate = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0 40px;
`

export const Column = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span{
    margin-bottom:10px;
    font-size: 16px;
    font-weight: 400;
  }
  & input{
    padding:10px;
    box-shadow:none ;
    border-color:none ;
    backgorund:red;
  }
`

export const Label = styled.label`
  width: 80px;
  font-size: 12px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border-radius: 5px;
  padding: 3px 5px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: ${props => props.error ? '#f53959' : '#000'};
  color: ${props => props.error ? '#f53959' : '#000'};
`

export const Error = styled.span`
  font-size: 11px;
  color: #f53959;
  margin-top: 3px;
`
