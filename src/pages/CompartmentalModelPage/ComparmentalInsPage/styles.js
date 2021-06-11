import styled from 'styled-components'


export const CompartmentalComparmentalInsPageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;`


export const ContianerTable = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 40%;
  `
export const ContianerButton = styled.div`
  display: flex;  
  align-items: center;
  justify-content:center;
  margin-bottom:20px;
  width: 100%;
  `
export const ContainerSearchSection = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content:center;
flex-direction:column;
margin-top:5%;
div {
  margin-bottom:10px;
}
`

export const SearchSection = styled.div`
display: flex;
width: 300px;
align-items: center;
justify-content:center;
flex-direction:row;
i{
  font-size: 22px;
  margin-right:10px;
}
`

export const ContainerChooseDate = styled.div`
display: flex;
width: 100%;
margin: 20px 0 35px;
`

export const Column = styled.div`
display: flex;
width: 50%;
flex-direction: column;
justify-content: center;
align-items: center;  
& span{
  font-size: 16px;
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
