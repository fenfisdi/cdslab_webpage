import React from 'react'
import { NavigationBack, NavigationContainer, NavigationForward } from './styles'
import { Link } from 'react-router-dom'
import { ArrowForwardIos } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core'

const NavigationButtons = ({ main, back, forward }) => {

  const fillNavigationBack = () => (
    <NavigationBack>
      {main && <Link to={main.path} onClick={main.handleClick}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<HomeIcon />}

        >
          {main.name}
        </Button>
      </Link>}
      {back && <Link to={back.path} >{back.name}</Link>}
    </NavigationBack>
  )

  const fillNavigationForward = () => {
    if(forward){
      return (
        <NavigationForward  to={forward.path}>
            {forward.name}
            <IconButton color="secondary" aria-label={forward.name}>
              <ArrowForwardIos/>
            </IconButton>
        </NavigationForward>
      )
    }
  }

  return (
    <NavigationContainer>
      {fillNavigationBack()}
      {fillNavigationForward()}
    </NavigationContainer>
  )
}

export default NavigationButtons
