import React from 'react'
import imgMinCiencia from '../../../../assets/images/ladingPage/Minciencias_Colombia.svg'
import imgSena from '../../../../assets/images/ladingPage/SENA Colombia logo.svg'
import { useSponsorsStyles } from './style'
import theme from '@styles/cdslabTheme'
import { 
  SPONSORS_TEXT_ONE, 
  SPONSORS_TEXT_TWO, } from '../../../../constants/landing'

const Sponsors = () => {
  const classes = useSponsorsStyles(theme)
  return (
    <>
      <h1 className={classes.title}>Patrocinadores:</h1>

      <div className={classes.containerCds}>
        <div className={classes.boxCds}>
          <img className={classes.imageMinCiencias} src={imgMinCiencia} />
          <div className={classes.textMinCiencias}> <p>{ SPONSORS_TEXT_ONE }</p> </div>
        </div>
        <div className={classes.boxCds}>
          <img className={classes.imageSena} src={imgSena} />
          <div className={classes.textSena}> <p>{ SPONSORS_TEXT_TWO }</p> </div>
        </div>
      </div>
    </>
  )
}
export default Sponsors