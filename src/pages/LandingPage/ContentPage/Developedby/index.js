import React from 'react'
import imgDeveloped from '../../../../assets/images/ladingPage/logos fenfisdi.svg'
import { useDevelopedByStyles } from './style'
import theme from '@styles/cdslabTheme'
import { DEVELOPED_BY_TEXT } from '../../../../constants/landing'

const DevelopedBy = () => {
  const classes = useDevelopedByStyles(theme)
  return (
    <>
      <h1 className={classes.title}>Desarrollado Por:</h1>
      <div className={classes.storyText}>
        <div className={classes.divDeveloped}>
          <div className={classes.textDeveloped}>
            { DEVELOPED_BY_TEXT }
          </div>
          <div className={classes.divDevelopedImg}><img className={classes.imgDeveloped} src={imgDeveloped} /></div>
        </div>
      </div>
    </>
  )
}

export default DevelopedBy
