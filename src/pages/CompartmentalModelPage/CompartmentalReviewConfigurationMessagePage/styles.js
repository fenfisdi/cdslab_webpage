import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
export const CompartmentalReviewConfigurationMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CompartmentalReviewConfigurationMessageFormTitle = styled.section`
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

export const useCompartmentalReviewConfigurationMessageStyles = makeStyles((theme) => ({
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
  },
  loading: {
    'min-height': ' 500px',
    'align-items': 'center'
  }
}))