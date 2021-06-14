import React from 'react'
import imgModels from '../../../../assets/images/ladingPage/Models.svg'
import { useModelsStyles } from './style'
import theme from '@styles/cdslabTheme'
import { MODELS_TEXT_ONE, MODELS_TEXT_TWO, MODELS_QUESTION } from '../../../../constants/landing'

const Models = () => {
  const classes = useModelsStyles(theme)
  return (
    <>
      <div className={classes.containerModels} >
        <div className={classes.boxModels}>
          <div className={classes.question}> {MODELS_QUESTION} </div>
          <div className={classes.divModels}>
            <div className={classes.textModels}>
              {MODELS_TEXT_ONE}
              <br />
              {MODELS_TEXT_TWO}
            </div>
            <div className={classes.divModelsImg}><img className={classes.imgSteps} src={imgModels} /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Models
