import React from 'react'
import Typography from '@material-ui/core/Typography'
import { CardContainer } from './styles'
import TitleIcon from '../../../../layouts/TitleIcon'


const Charter = ({ name, indetifier, handleClickCharter, selected, extraOption, disabled, titleIcon }) => {

  return (
    <CardContainer disabled={(disabled)} selected={(selected === indetifier)} onClick={() => { !disabled && handleClickCharter(extraOption) }}>
      {titleIcon && <TitleIcon icon={titleIcon} width={50} height={50} colorText='#827C02' fontSize='20px' fontWeight='bold'/>}
      <Typography variant="h6" component="h2">
        {name}
      </Typography>
    </CardContainer>
  )
}

export default Charter