import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { CharterBody, CharterIcon } from './styles'
import theme from '../../../styles/cdslabTheme'


const TitleIcon = ({ title, otherIconType = false, icon, width = 60, height = 60}) => {

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
      <Typography variant="body2" component="p" style={{'color':theme.palette.primary.colorTitle,fontSize:'45px', fontWeight: 'bold', marginLeft:'20px'}}>
        {title}
      </Typography>
    </Grid>
  )
}

export default TitleIcon
