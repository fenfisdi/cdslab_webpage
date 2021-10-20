import React, { useState } from 'react'
import cdsTitleSvg from '../../../assets/images/ladingPage/Logo CDS.svg'
import theme from '@styles/cdslabTheme'
import { useHeaderStyles } from '../styles'
import ModalCommon from '../../../components/ui/ModalCommon'
import VulnerabilityGroup from '../../AgentsBasedModelPage/VulnerabilityGroup'

const Header = () => {
  const classes = useHeaderStyles(theme)
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const handleCloseModalCancel = () => {
    setOpenModalCancel(false)
  }

  const openModal = () => {
    setOpenModalCancel(true)
  }
  return (
    <div className={classes.container}>
      <div onClick={openModal}><img src={cdsTitleSvg} className={classes.image} /></div>
      <h3 className={classes.title}>Plataforma de simulación de enfermedades contagiosas</h3>
      <br />
      <br />
      <br />
      <ModalCommon
        classes={classes}
        handleOptions={''}
        handleClose={handleCloseModalCancel}
        open={openModalCancel}
        disableBackdropClick={true}
        title={'Cancelar solicitud'}
        handleConfirm={''}
        cancel={''}
        confirm={'Done'}
      >
        <VulnerabilityGroup
        />
      </ModalCommon>
    </div >
  )
}

export default Header
