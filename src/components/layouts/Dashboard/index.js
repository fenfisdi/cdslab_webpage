import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Navigator from './Navigator'
import Content from './Content'
import theme from '../../../styles/cdslabTheme'
import { Grid, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        CDSLab
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

const drawerWidth = 256

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    background: '#fff'
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1'
  }
}

function Dashboard({ classes, children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation='js'>
          <Navigator
            PaperProps={{ style: { width: drawerWidth, background: '#00838F', border: 'none' } }}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Navigator PaperProps={{ style: { width: drawerWidth, background: '#00838F', border: 'none' } }} />
        </Hidden>
        {/* <Menunuevo /> */}
      </nav>
      <div className={classes.app}>
        {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
        <Hidden smUp>
          <Grid item>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <main className={classes.main}>
          <Content>
            {children}
          </Content>
        </main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
