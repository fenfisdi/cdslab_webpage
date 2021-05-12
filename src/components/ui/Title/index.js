import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const TitleComponent = ({ justify, alignItems, title, variant, xs, unit='' }) => {
  return (
    <Grid item container justify={justify} alignItems={alignItems} xs={xs || 12} spacing={1}>
      <Typography variant={variant}>{`${title}   `}</Typography>
      <Typography variant={'span'} style={{'marginLeft':'5px'}}>{unit}</Typography>
    </Grid>
  )
}
