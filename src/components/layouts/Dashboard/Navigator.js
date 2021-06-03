import React from 'react'
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
import graphIcon from '../../../assets/images/layout/line-chart_freepik.svg'
import managementIcon from '../../../assets/images/management/management_color.svg'
import cdsSvg from '../../../assets/images/ladingPage/Logo CDS Lab Iniciales_.svg'
import { Link, NavLink } from 'react-router-dom'
import TitleIcon from '../TitleIcon'
import { usePath } from '../../PathContext'
import { useStore } from '@store/storeContext'
import { Icon } from '@material-ui/core'
import {
  SESSION_LOGIN,
} from '../../../actions/types/sessionTypes'
const categories = [
  {
    id: '',
    children: [
      { id: 'Simulations', icon: graphIcon , typeIcon : 'svg', href: '/simulationModels', rol: ['user','root'] },
      { id: 'Management', icon: managementIcon, typeIcon : 'svg', href: '/management', rol: ['admin','root'] },
    ]
  },
  {
    id: '',
    children: [
      { id: 'Profile', icon: <AccountCircleIcon style={{ fontSize: 50 }} />,typeIcon : 'material',href: '/profile', rol: ['user','root'] },
    ]
  }
]
const styles =  (theme) => ({
  paper:{
    border: 'none !important'
  },
  categoryHeader: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 1,
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
    color: theme.palette.primary.main,
    'text-decoration': 'underline !important',
  },
  itemPrimary: {
    fontSize: '18px'
  },
  boderItem: {
    border: '1px solid #fff'
  },
  itemIcon: {
    'min-width': '18%',
    position: 'relative',
    top: '-5px',
    left: '-11px',
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
  }
})

function Navigator (props) {
  const { classes, ...other } = props
  const {setPath} = usePath()
  const {
    state: {
      session: {  user }
    },
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
              .map(({ id: childId, icon,typeIcon, active,href }) => 
                (
                  <NavLink 
                    key={childId} 
                    activeClassName={classes.itemActiveItem} 
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
                          typeIcon === 'svg' 
                            ? (<img src={icon} style={{width: '40px', marginLeft: '10px'}} /> )
                            : icon
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
            <Icon className="fas fa-sign-out-alt" style={{ color: '#fff', fontSize:'30px' }} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigator)
 