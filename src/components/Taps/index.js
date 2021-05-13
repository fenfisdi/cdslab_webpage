import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import imgAgents from '../../assets/images/taps/agents_SVG.svg'
import imgCompartamental from '../../assets/images/taps/cmodels_SVG.svg'

const useStyles = makeStyles(() => ({
  root: {
    width:'100%',
    background: '#fff'
  },
  itemActiveItem: {
    '& > div' : {
      color: '#44605d',
      fontSize: '15px'
    },
    '& > div > img' : {
      height: '35px'
    }
  },
  containerTaps:{   
    display: 'inline-flex',
    height: '40px',
    textAlign: 'center',
    justifyContent: 'center'
  },
  taps : {
    width: '50%',
    cursor: 'pointer',
    background: '#F1F1F1'
  },
  img: {
    height: '30px'
  },
  divImg :{
    width: '50%'
  },
  divLabel:{
    width: '40%',
    position: 'relative',
    top: '7px'
  },
  link: {
    display: 'inline-flex',
    textDecoration : 'none'
  },
  linkDisabled: {
    display: 'inline-flex',
    textDecoration : 'none',
    color: '#808080'
  }
}))

export default function FullWidthTabs(props) {

 
  const {tabs} = props
  const classes = useStyles()

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
                            <img src={tab.icon === 'cmodels_SVG' ? imgCompartamental : imgAgents} className={classes.img} />
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
                            <img src={tab.icon === 'cmodels_SVG' ? imgCompartamental : imgAgents} className={classes.img} />
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