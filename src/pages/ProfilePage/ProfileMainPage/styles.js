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