import React, {Suspense}from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store/storeContext'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { LanguageContextProvider } from './config/languageContext'
import theme from './styles/cdslabTheme'
import App from './App'
import './config/languageSettings'
import LoaderComponent from './components/ui/Loader'

ReactDOM.render(
  
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Suspense fallback={<LoaderComponent  marginTop={50}/>}>
            <LanguageContextProvider>
              <App />
            </LanguageContextProvider>
          </Suspense>
        </StoreProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
