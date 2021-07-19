import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React  from 'react'


const QuarantineTitleForm = ({title,alignItems,justify,style}) => {

  return (
    <Grid container item xs={12} justify={justify} alignItems={alignItems} style={style || {background:'#CFD8DC', padding:'10px', color:'black'}}>
      <Typography>{title}</Typography>
    </Grid>
  )
}

export default QuarantineTitleForm
