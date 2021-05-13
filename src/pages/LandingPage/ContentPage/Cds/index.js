import React from 'react'
import imgBoxCdsLab from '../../../../assets/images/ladingPage/Logo CDS Lab Iniciales_.svg'
import imgBoxCdsLib from '../../../../assets/images/ladingPage/Logo CDSL Iniciales_Opc1.svg'
import { useStepStyles } from './style'
import theme from '@styles/cdslabTheme'
import { 
  COMPOUND_ONE, 
  COMPOUND_TWO, } from '../../../../constants/landing'

const Cds = () => {
  const classes = useStepStyles(theme)
  return (
    <>
      <h1 className={classes.title}>Compuesta Por:</h1>

      <div className={classes.containerCds}>
        <div className={classes.boxCds}>
          <img className={classes.imageLab} src={imgBoxCdsLab} />
          <div className={classes.textCdsLab}> <p>{ COMPOUND_ONE }</p> </div>
        </div>
        <div className={classes.boxCds}>
          <img className={classes.imageLib} src={imgBoxCdsLib} />
          <div className={classes.textCdsLib}> { COMPOUND_TWO } </div>
        </div>
      </div>
    </>
  )
}
export default Cds