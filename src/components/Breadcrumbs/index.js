import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Icon,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useHistory, withRouter } from 'react-router'
import {  usePath } from '../PathContext'

const useStyles = makeStyles(() => ({
  separador: {
    fontSize: '16px',
    marginTop: '10px'
  },
}))

const Breadcrumbs = () => {
  const classes = useStyles()
  const history = useHistory()
  const {path, setPath} = usePath()

  const handleHistory = (routeTo,parameters, index) => {
    const routesBlocker = handleRoutesBlocker(routeTo)
    if(routesBlocker){
      path.length = index + 1
      sessionStorage.setItem('path',JSON.stringify(path))
      setPath(path)
      if(parameters){
        history.replace(routeTo + parameters)
      }else{
        if(routeTo === 'compartmentalModels'){
          history.replace('/' + routeTo)
        }else{
          history.replace(routeTo)
        }
      }
    }
  }

  const handleRoutesBlocker = (routeTo) => {
    if(routeTo === 'chooseSimulation'){
      return false
    }
    if(routeTo === 'newSimulations' && path.find(element => element.breadCrumbRoute === 'chooseSimulation')){
      return false
    }
    if(routeTo === 'compartmentalModels' && path.find(element => element.breadCrumbRoute === 'chooseSimulation')){
      return false
    }
    if(path.find(element => element.breadCrumbRoute === 'reviewConfigurationInformation')){
      return false
    }
    return true
  }
  
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator='›' maxItems={3} className={classes.separador} >
      {path.map(({name,breadCrumbRoute,parameters}, index) => {
        const isLast = index === path.length - 1
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => handleHistory(breadCrumbRoute,parameters,index)}>
            {name}
          </Link>
        )
      })}
    </MUIBreadcrumbs>
  )
}

export default withRouter(Breadcrumbs)
