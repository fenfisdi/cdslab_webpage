import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import cdsSvg from '../../../assets/images/ladingPage/Logo CDS Lab Iniciales_.svg'
import { Link, NavLink } from 'react-router-dom'
import { usePath } from '../../PathContext'
import { useStore } from '@store/storeContext'
import { Icon } from '@material-ui/core'
import { languageContext } from '../../../config/languageContext'
import {
  SESSION_LOGIN,
} from '../../../actions/types/sessionTypes'
import SvgChart from '../../../assets/icons/SvgChart'
import SvgManagement from '../../../assets/icons/SvgManagement'

const categories = [
  {
    id: '',
    children: [
      { id: 'Simulations', icon: <SvgChart fill='#FFFFFF' style={{marginLeft: '15px'} } /> , typeIcon : 'svg', href: '/simulationModels', rol: ['user','root','admin'] },
      { id: 'Management', icon: <SvgManagement fill='#FFFFFF' style={{marginLeft: '15px'} }/>, typeIcon : 'svg', href: '/management', rol: ['admin','root'] },
    ]
  },
  {
    id: '',
    children: [
      { id: 'Profile', icon: <AccountCircleIcon style={{ fontSize: 50 }} />,typeIcon : 'material',href: '/profile', rol: ['user','root','admin'] },
    ]
  }
]

const styles =  (theme) => ({
  paper:{
    border: 'none !important'
  },
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 10,
    paddingBottom: 1,
    color: '#fff'
  },
  itemCategory: {
    backgroundColor: '#fff',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: 10,
  },
  firebase: {
    fontSize: 24,
    color: '#fff'
  },
  itemActiveItem: {
    '& > div' : {
      color: '#18FFFF !important',
    },
    '& svg':{
      fill: '#18FFFF !important',
    }
  },
  itemPrimary: {
    fontSize: '18px'
  },
  boderItem: {
    border: '1px solid #fff'
  },
  itemIcon: {
    top: '-5px',
    left: '-5px',
    position: 'relative',
    textAlign: 'center',
    margin: '0 auto',
    display: 'block',
    '& > div':{
      fontSize: '40px'
    }

  },
  divider: {
    marginTop: theme.spacing(3),
    backgroundColor: '#fff'
  },
  link:{
    'text-decoration': 'none',
    color: '#fff',
    width: '100%',
  },
  image:{
    width: '60%',
    transform: 'scale(1.5)',
    display: 'block',
    margin: '0 auto'
  },
  logout : {
    width: '100%',
    marginTop: '30px'
  },
  linkLenguage: {
    color: '#fff',
    '&:hover': {
      cursor: 'pointer'
    },
    position: 'fixed',
    right: '0',
    bottom: '0',
    width: '80%'
  },
  testLogout: {
    marginLeft: '20px',
    color: '#fff',
    fontSize: '14px'
  }
})

function Navigator (props) {
  const { classes, ...other } = props
  const {language,  changelanguage } = useContext(languageContext)
  const {setPath} = usePath()
  const {
    dispatch
  } = useStore()
  const rol = localStorage.getItem('role')

  const handleDeletePath = () => {
    setPath([])
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch({
      type: SESSION_LOGIN,
      payload: null
    })
  }

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <Link to='landingPage'>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
            <img src={cdsSvg} className={classes.image} />
          </ListItem>
        </Link>
        {categories.map(({ id, children}) => (
          <React.Fragment key={id}>
            <Divider className={classes.divider} />
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>{}
            {children
              .filter(x => { return x.rol.includes(rol) })
              .map(({ id: childId, icon, active,href }) => 
                (
                  <NavLink 
                    key={childId} 
                    activeClassName={classes.itemActiveItem} 
                    activeStyle={{ background: 'red'}}
                    className={classes.link} 
                    to={href} 
                    variant='body2'
                    onClick={handleDeletePath}
                  >
                    <ListItem
                      button
                      className={clsx(classes.item, active && classes.itemActiveItem)}
                    >
                      <ListItemIcon className={classes.itemIcon}>
                        {
                          icon
                        }  
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary
                        }}
                      >
                        {childId}
                      </ListItemText>
                    </ListItem>
                  </NavLink>
                )
              )}
          </React.Fragment>
        ))}
        <Link to='' onClick= {handleLogout} title='Logout'>
          <ListItem className={classes.logout}>
            <Icon className="fas fa-sign-out-alt" style={{ color: '#fff', fontSize:'30px',marginLeft: '5px' }} />
            <span className={classes.testLogout}>Logout</span>
          </ListItem>
        </Link>
        <Link className={classes.linkLenguage} variant='body2' onClick={changelanguage}>
          {language ? 'ES':'EN' }
        </Link>
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigator)
 