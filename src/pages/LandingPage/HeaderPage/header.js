import React from 'react'
import cdsTitleSvg from '../../../assets/images/ladingPage/Logo CDS.svg'
import theme from '@styles/cdslabTheme'
import { useHeaderStyles } from '../styles'

const Header = () => {
  const classes = useHeaderStyles(theme)
  return (
    <div className={classes.container}>
      <div><img src={cdsTitleSvg} className={classes.image} /></div>
      <h3 className={classes.title}>Plataforma de simulación de enfermedades contagiosas</h3>
    </div>
  )
}

export default Header