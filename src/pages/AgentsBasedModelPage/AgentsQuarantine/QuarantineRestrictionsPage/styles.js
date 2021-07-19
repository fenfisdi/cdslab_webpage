import styled from 'styled-components'


export const SectionCyclicQuarantineRestrictions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) => props.style && {...props.style}}`

  
export const RestrictionsItems = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
`


export const RestrictionsItem = styled.div`
display: flex;
flex-direction: row;
width: ${(props) => props.width ? props.width :'50%'};
${(props) => props.style && {...props.style}}
`

export const RestrictionsSelectItem = styled.div`
display: flex;
flex-direction: row;
width: ${(props) => props.width ? props.width :'40%'};
${(props) => props.style && {...props.style}}
`












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

