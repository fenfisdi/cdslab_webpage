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
import cdsSvg from '../../../assets/images/ladingPage/Logo CDS Lab Iniciales_.svg'
import { Link, NavLink } from 'react-router-dom'
import TitleIcon from '../TitleIcon'
import { Icon } from '@material-ui/core'

const categories = [
  {
    id: '',
    children: [
      { id: 'Simulations', icon: graphIcon , typeIcon : 'svg', href: '/simulationModels' },
      { id: 'Management', icon: <Icon className={'fas fa-key'} />,typeIcon : 'material', href: '/management' },
    ]
  },
  {
    id: '',
    children: [
      { id: 'Profile', icon: <AccountCircleIcon style={{ fontSize: 30 }} />,typeIcon : 'material',href: '/ModelSettingsPage' },
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
    '& > div':{
      fontSize: '40px'
    }

  },
  divider: {
    marginTop: theme.spacing(8),
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
  }
})

function Navigator (props) {
  const { classes, ...other } = props
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
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon,typeIcon, active,href }) => (
              <NavLink key={childId} activeClassName={classes.itemActiveItem} className={classes.link} to={href} variant='body2'>
                <ListItem
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {
                      typeIcon === 'svg' 
                        ? (<TitleIcon icon={icon} width={20} height={20}  fontSize='40px' fontWeight='bold'/> )
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
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigator)
 