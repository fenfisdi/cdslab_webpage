import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useHistory, withRouter } from 'react-router'
import {  usePath } from '../PathContext'

const useStyles = makeStyles(() => ({
  separador: {
    fontSize: '16px',
  },
}))

const Breadcrumbs = () => {
  const classes = useStyles()
  const history = useHistory()
  const [path, setPatch] = usePath()

  const handleHistory = (routeTo, index) => {
    path.length = index + 1
    sessionStorage.setItem('path',JSON.stringify(path))
    setPatch(path)
    history.push(routeTo)
  }

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator='›' maxItems={2} className={classes.separador} >
      {path.map(({name}, index) => {
        const isLast = index === path.length - 1
        const routeTo = `/${path.slice(0, index + 1).map(({name}) => name).join('/')}`
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => handleHistory(routeTo,index)}>
            {name}
          </Link>
        )
      })}
    </MUIBreadcrumbs>
  )
}

export default withRouter(Breadcrumbs)
