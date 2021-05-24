import React from 'react'
import { 
  STORY_LANDING_PAGE} from '../../../constants/landing'
import theme from '@styles/cdslabTheme'
import { useContentStyles } from '../styles'

import Cds from './Cds'
import Models from './Models'
import Scope from './Scope'
import Step from './Step'
import DevelopedBy from './Developedby'
import Sponsors from './Sponsors'
import Contact from './Contact'

const Contents = () => {
  const classes = useContentStyles(theme)

  return (
    <>
      <h1 className={classes.title}>Historia</h1>
      <div className={classes.storyText}>{STORY_LANDING_PAGE}</div>
      <br />
      <Cds />
      <Scope />
      <Models />
      <Step />
      <DevelopedBy />
      <Sponsors />
      <Contact />
    </>
  )
}

export default Contents
