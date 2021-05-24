import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
export const CompartmentalReviewConfigurationInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CompartmentalReviewConfigurationInformationFormTitle = styled.section`
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

export const CompartmentalReviewConfigurationInformationBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CompartmentalReviewConfigurationInformationdisplayParameters = styled.div`
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  width: 100%;
`
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
  `
export const ExtraParamsLabel = styled.div`
  display: flex;
  width:15%;
  `

export const useCompartmentalReviewConfigurationInformationStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '10px',
    marginBottom: '20px',
    padding: theme.spacing(2),
    'box-shadow': '1px 3px 9px 5px rgba(0,0,0,0.14)',
    background: '#c4c4c442',
    fontWeight:'500',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    '& p':{
      marginBottom:'20px'
    }
  }
}))