import { createMuiTheme } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#79e2e1',
      main: '#66c2c1',
      dark: '#4f9695',
      contrastText: '#fff',
      colorTitle: '#006064'
    },
    secondary: {
      light: '#a79e02',
      main: '#827b00',
      dark: '#524e01',
      contrastText: '#fff',
      card: '#E0F3FA',
      cardFont: '#006064',
      cardSelect: '#E5E5E5'
    }
  },

  font: {
    title: {

    },

    subtitle: {
      fontSize: '15px',
      fontFamily: 'Roboto',
      fontWeight: '400px'
    },

    paragraphs: {
      fontSize: '15px',
      fontFamily: 'Roboto',
      fontWeight: '300px'
    }
  },

  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    },
    fontSize: 14
  },
  shape: {
    borderRadius: 8
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none'
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1)
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    },
    MuiError: {
      root: {
        whiteSpace: 'pre-wrap'
      }
    }
  }
}

export default theme
