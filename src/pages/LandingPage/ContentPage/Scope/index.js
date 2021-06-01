import React from 'react'
import { useScopeStyles } from './style'
import { 
  SCOPE_QUESTION_ONE, 
  SCOPE_ONE,
  SCOPE_QUESTION_TWO,
  SCOPE_TWO,
  SCOPE_TWO_LICENSE,
  SCOPE_TWO_lINK } from '../../../../constants/landing'
import imgPadlock from '../../../../assets/images/ladingPage/candado.png'
import imgOpenSource from '../../../../assets/images/ladingPage/OpenSource.png'
import imgPython from '../../../../assets/images/ladingPage/python-logo-generic.svg'

const Scope = () => {
  const classes = useScopeStyles()
  return (
    <>
      <h1 className={classes.title}>Alcance:</h1>

      <div className={classes.containerScope}>
        <div className={classes.boxScope}>
          <div className={classes.question}> { SCOPE_QUESTION_ONE } </div>
          <div>
            <div className={classes.divScopeImg}><img className={classes.imgPadlock} src={imgPadlock} /></div>
            <div className={classes.textScope}> { SCOPE_ONE } </div>
          </div>

        </div>
        <div className={classes.boxScope}>
          <div className={classes.question}> { SCOPE_QUESTION_TWO } </div>
          <div className={classes.divScopeImg}><img className={classes.imgOpenSource} src={imgOpenSource} /></div>
          <div className={classes.textScope}> 
            <div>{ SCOPE_TWO } </div>
            <br />
            <div> { SCOPE_TWO_LICENSE } </div>
            <div className={classes.scopeLink} ><a href={SCOPE_TWO_lINK } target='_blank' rel="noreferrer">{ SCOPE_TWO_lINK }</a>  </div>
            <div className={classes.divImgPython} > <img className={classes.imgPython} src={imgPython} /> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Scope
