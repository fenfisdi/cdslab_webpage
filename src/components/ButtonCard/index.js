import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ButtonCardContainer } from './styles'
import TitleIcon from '../layouts/TitleIcon'
const ButtonCard = ({ name, indetifier, handleClick, selected, extraOption, disabled, titleIcon:TitleIconSvg }) => {
  
  return (
    <ButtonCardContainer disabled={(disabled)} selected={(selected === indetifier)} onClick={() => { !disabled && handleClick(extraOption) }}>
      {typeof TitleIconSvg === 'function' && <TitleIconSvg fill='#006064' width={50} height={50} />}
      {typeof TitleIconSvg === 'string' && <TitleIcon icon={TitleIconSvg} width={50} height={50} colorText='#827C02' fontSize='20px' fontWeight='bold'/>} 
      <Typography variant="h6" component="h2">
        {name}
      </Typography>
    </ButtonCardContainer>
  )
}

export default ButtonCard