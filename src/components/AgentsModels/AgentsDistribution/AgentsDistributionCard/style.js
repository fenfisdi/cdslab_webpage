import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin: 5px 0;
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

export const Helper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`

export const StyledCard = styled(Card)`
  width: 80%;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;
  background: ${(props) => props.theme.palette.secondary.card};
`
export const Title = styled.p`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.colorTitle};
`
