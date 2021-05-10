import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { CharterBody, CharterIcon } from './styles'


const TitleIcon = ({title,icon,width,height,colorText,fontSize,fontWeight}) => {
  
  return (
   
    <Grid container item xs={6} justify="center" alignItems="center" direction="row">
      <CharterBody>
        <CharterIcon>
          <img src={icon} width={width} height={height}/>
        </CharterIcon>      
      </CharterBody>
      <Typography variant="body2" component="p" style={{'color':colorText,'font-size':fontSize, 'font-weight': fontWeight}}>
        {title}
      </Typography>
    </Grid>
     

  )
}

export default TitleIcon
