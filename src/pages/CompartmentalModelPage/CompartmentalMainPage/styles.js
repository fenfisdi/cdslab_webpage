import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
export const useCompartmentalMainPageStyles = makeStyles((theme) => ({
  formBody: {
    marginTop: '20px',
    marginBottom: '20px',
    padding: theme.spacing(2),
    'box-shadow': '-1px 0px 8px 5px rgba(0,0,0,0.14)',
    background: '#ECEFF1',
    ...theme.font.paragraphs,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    color: '#000504'
  },
  loading: {
    'min-height': ' 500px',
    'align-items': 'center'
  }
}))


export const CompartmentalMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3%;
`

export const CompartmentalMainPageCards = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:30px
`