import styled from 'styled-components'

export const Items = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.jump{
    margin-top:20px
  }
`
export const SubItems = styled.div`
display: flex;
width: 20%;
justify-content: flex-start;
&.tableTitle{
  justify-content: center;
  font-weight: 500;
}
&.titleSubItmes{
  font-weight: 500;
}
&.jump{
  margin-top:20px
}
`

export const ItemsTable = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin-top: 20px;
  `
export const SubItemsTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  `

export const ExtraParamsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-aling: center;
  `
export const ExtraParamsLabel = styled.div`
  display: flex;
  width:15%;
  `


export const ReviewSimulationSettingsBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 30px
`
