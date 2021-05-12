import React from 'react'
import cdsTitleSvg from '../../../assets/images/ladingPage/title.png'
import theme from '@styles/cdslabTheme'
import { useHeaderStyles } from '../styles'

const Header = () => {
  const classes = useHeaderStyles(theme)
  return (
    <div className={classes.container}>
      <img src={cdsTitleSvg} className={classes.image} />
    </div>
  )
}

export default Header