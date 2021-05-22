import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Icon,AppBar,makeStyles } from '@material-ui/core'
import { useStore } from '../../store/storeContext'
import { useSessionActions } from '../../actions/sessionsActions'


const useStyles = makeStyles(() => ({
  root: {
    width:'100%',
    background: '#fff'
  },
  itemActiveItem: {
    background: '#fff',
    color: 'rgb(68, 96, 93)',
    textDecoration: 'none'
  },
  containerTaps:{   
    display: 'inline-flex',
    height: '50px',
    textAlign: 'center',
    justifyContent: 'center'
  },
  taps : {
    width: '50%',
    cursor: 'pointer',
    background: '#F1F1F1'
  },
  img: {
    height: '40px',
    position: 'relative',
    top: '6px'
  },
  divImg :{
    width: '50%'
  },
  divLabel:{
    position: 'relative',
    top: '10px',
    fontSize: '18px'
  },
  link: {
    display: 'inline-flex',
    textDecoration : 'none',
    width: '100%',
    height: '50px',
  },
  linkDisabled: {
    display: 'inline-flex',
    textDecoration : 'none',
    width: '100%',
    height: '50px',
    color: '#808080'
  }
}))

export default function FullWidthTabs(props) {

  const {tabs,idTab} = props
  const classes = useStyles()
  const history = useHistory()
  const {
    state: {      
      session: {tabs:tabsSession}
    },
    dispatch
  } = useStore()

  const { 
    setActiveTab
  } = useSessionActions(dispatch)

  useEffect(() => {
    if(tabsSession){
      tabs.map((elem) => {
        if(elem.id === idTab){
          setActiveTab(false)
          history.push(elem.path)
        }
      })
    }
  }, [])

  const renderImg = (tab) => (
    <div>
      {
        tab.iconType === 'svg'
          ? (
            <img src={tab.icon} className={classes.img} />
          )
          :
          (<Icon className={tab.icon} style={{ fontSize: 20, marginLeft:'-10px' }}/>)
      }
    </div>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <div  className={classes.containerTaps}>
          {
            tabs.map((tab,i) => {
              return (
                <div key={i} className={classes.taps}>
                  {
                    tab.disabled 
                      ? 
                      (
                        <div className={classes.linkDisabled}>
                          <div className={classes.divImg} > 
                            {renderImg(tab)}
                          </div>
                          <div className={classes.divLabel} >{tab.label}</div>
                        </div>
                      )
                      : (
                        <NavLink  
                          to={tab.path} 
                          activeClassName={classes.itemActiveItem}  
                          className={classes.link}>
                          <div className={classes.divImg} > 
                            {renderImg(tab)}
                          </div>
                          <div className={classes.divLabel} >{tab.label}</div>
                        </NavLink>
                      )
                  }
                </div>
              )})
          }
        </div>
      </AppBar>
    </div>
  )
}
