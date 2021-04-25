import React from 'react'
import Typography from '@material-ui/core/Typography'
import { CardContainer } from './styles'



const Charter = ({ name, indetifier, handleClickCharter, selected, extraOption }) => {
  return (
    <CardContainer selected={(selected === indetifier)} onClick={() => { handleClickCharter(extraOption) }}>
      <Typography variant="h6" component="h2">
        {name}
      </Typography>
    </CardContainer>
  )
}

export default Charter