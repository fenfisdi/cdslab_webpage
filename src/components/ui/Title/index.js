import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const TitleComponent = ({ justify, alignItems, title, variant, xs, unit='' }) => {
  const parser = new DOMParser()
  const decodedString = parser.parseFromString(`<!doctype html><body>${unit}`, 'text/html').body.textContent
  return (
    <Grid item container justify={justify} alignItems={alignItems} xs={xs || 12} spacing={1}>
      <Typography variant={variant}>{`${title}`}</Typography>
      <Typography style={{ 'marginLeft': '5px' }}>{decodedString}</Typography>
    </Grid>
  )
}
