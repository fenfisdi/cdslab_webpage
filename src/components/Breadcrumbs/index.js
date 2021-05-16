import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { withRouter } from 'react-router'

const useStyles = makeStyles(() => ({
  separador: {
    fontSize: '20px',
  },
}))


const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props
  const classes = useStyles()
  const pathnames = pathname.split('/').filter(x => x)
  console.log(pathnames)
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator='›' className={classes.separador} >
      {/* {pathnames.length > 0 ? (
        <Link onClick={() => history.push(match.path)}>compartmentalModels</Link>
      ) : (
        <Typography> Home </Typography>
      )} */}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
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
