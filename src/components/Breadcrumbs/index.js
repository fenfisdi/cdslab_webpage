import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useHistory, withRouter } from 'react-router'
import { PathProvider, usePath } from '../PathContext'

const useStyles = makeStyles(() => ({
  separador: {
    fontSize: '20px',
  },
}))

const Breadcrumbs = props => {

  const classes = useStyles()
  const history = useHistory()
  const [path] = usePath()
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator='›' className={classes.separador} >
      {path.map(({name}, index) => {
        const isLast = index === path.length - 1
        const routeTo = `/${path.slice(0, index + 1).map(({name}) => name).join('/')}`
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        )
      })}
    </MUIBreadcrumbs>
  )
}

export default withRouter(Breadcrumbs)
