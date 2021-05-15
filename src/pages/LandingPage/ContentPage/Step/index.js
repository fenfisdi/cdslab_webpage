import React from 'react'
import imgSteps from '../../../../assets/images/ladingPage/Steps.png'
import { useStepStyles } from './style'
import theme from '@styles/cdslabTheme'
import { STEP_QUESTION } from '../../../../constants/landing'

const Step = () => {
  const classes = useStepStyles(theme)
  return (
    <>
      <div className={classes.containerStep} >
        <div className={classes.boxStep}>
          <div className={classes.question}> { STEP_QUESTION } </div>
          <div className={classes.divStep}>
            <div className={classes.divStepImg}><img className={classes.imgSteps} src={imgSteps} /></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Step