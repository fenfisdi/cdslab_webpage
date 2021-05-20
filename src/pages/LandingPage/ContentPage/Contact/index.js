import React from 'react'
import { useContactStyles } from './style'
import theme from '@styles/cdslabTheme'
import { CONTACT } from '../../../../constants/landing'

const Contact = () => {
  const classes = useContactStyles(theme)
  return (
    <>
      <div className={classes.containerContact} >
        <div className={classes.boxContact}>
          <div className={classes.question}> { CONTACT } </div>
          <div className={classes.divContact}>
            <div className={classes.textContact}> 
              <div className={classes.textBold}>Boris Anghelo Rodríguez Rey</div>
              <div>Profesor de la Universidad de Antioquia</div>
              <div>Correo electrónico: <div className={classes.textEmail}>boris.rodriguez@udea.edu.co</div></div>
              <br />
              <div className={classes.textBold}>Grupo de Fundamentos y Enseñanza de la Física y los Sistemas Dinámicos (FenFisDi)</div>
              <div>Correo electrónico: <div className={classes.textEmail}>grupofenfisdi@udea.edu.co </div></div>
              <div>Página web: <div className={classes.textEmail}>https://fenfisdi.weebly.com/ </div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
