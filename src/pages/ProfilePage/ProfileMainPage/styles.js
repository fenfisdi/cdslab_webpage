import { makeStyles } from '@material-ui/core/styles'

export const useProfilePageStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '5%',
    marginBottom: '2%'
  },
  item: {
    marginRight: '10%',
  },

  buttonStyle: {
    backgroundColor: '#E0F7FA',
    color: '#006064',
    width: '200px',
    boxShadow: '-1px 1px 9px -1px #20717C'
  },

  titleContainer: {
    width: '100%',
    marginBottom: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex'
  },

  svgStyle: {
    backgroundColor: '#827C02'
  }
}))

import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 5%;
`

export const ContainerButtonCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  & div{
    margin-bottom:2%;
  }
  `

export const ContainerModelCard = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;`