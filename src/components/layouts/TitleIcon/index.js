import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { CharterBody, CharterIcon } from './styles'
import theme from '../../../styles/cdslabTheme'


const TitleIcon = ({ title, otherIconType = false, icon, width = 60, height = 60, fontSize = '45px', style={}}) => {

  return (
    <Grid container item xs={6} justify="center" alignItems="center" direction="row">
      <CharterBody>
        {icon && !otherIconType ?
          <CharterIcon>
            <img src={icon} width={width} height={height}/>
          </CharterIcon>
          :
          icon
        }
      </CharterBody>
      <Typography variant="body2" component="p" style={{'color':theme.palette.primary.colorTitle,fontSize:fontSize, fontWeight: 'bold', marginLeft:'20px',...style}}>
        {title}
      </Typography>
    </Grid>
  )
}

export default TitleIcon
