import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  color: white;
  text-align: center;
`
export const LoginError = styled.div`
  font-size: 0.8em;
    color: red;
    background: #f15a5a;
    padding: 10px 20px;
    text-align: center;
    margin-top: 10px;
    width: 350px;
`

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 0.8em;
   color: #ececec;
  font-style: italic;
`
export const useLoginFormStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
