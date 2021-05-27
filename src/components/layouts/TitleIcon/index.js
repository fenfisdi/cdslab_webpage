import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { CharterBody, CharterIcon } from './styles'
import theme from '../../../styles/cdslabTheme'


const TitleIcon = ({title,icon}) => {

  return (
    <Grid container item xs={6} justify="center" alignItems="center" direction="row">
      <CharterBody>
        {icon && <CharterIcon>
          <img src={icon} width={60} height={60}/>
        </CharterIcon>}
      </CharterBody>
      <Typography variant="body2" component="p" style={{'color':theme.palette.primary.colorTitle,fontSize:'45px', fontWeight: 'bold'}}>
        {title}
      </Typography>
    </Grid>
  )
}

export default TitleIcon
