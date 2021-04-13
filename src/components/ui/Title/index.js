import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const TitleComponent = ({ justify, alignItems, title, variant, xs }) => {
  return (
    <Grid item container justify={justify} alignItems={alignItems} xs={xs || 12}>
      <Typography variant={variant}>{title}</Typography>
    </Grid>
  )
}
