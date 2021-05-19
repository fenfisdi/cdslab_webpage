import { Grid } from '@material-ui/core'
import { map } from 'lodash'
import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'
import { useCompartamentalMySimulationsPreviewState } from './state'
import { useCompartamentalMySimulationPreviewStyles } from './styles'

export const CompartamentalMySimulationsPreviewPage = () => {
  const classes = useCompartamentalMySimulationPreviewStyles()
  const usePreview = useCompartamentalMySimulationsPreviewState()

  const info = [
    {name : 'Type of Simulation'},
    {name : 'Model'},
    {name : 'Parameters'},
    {name : 'State Variables to fit <only if adjust parameters'},
    {name : 'Data Source'},
    {name : 'Status'},
    {name : 'Execution time'}
  ]


  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Grid container item xs={5} justify="center" alignItems="center" direction="column">
          {
            info.map((elem,i) => (
              <Grid container key={i} item xs={6} justify="center" alignItems="center" direction="column">
                {elem.name}
              </Grid>
            ))
          }
        </Grid>
        <Grid container item xs={5} justify="center" alignItems="center" direction="column">
         
        </Grid>
        <Grid container item xs={2} justify="center" alignItems="center" direction="column">
          Dowdload
          <GetAppIcon />
        </Grid>
        
      </Grid>
      <hr />
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Grid container item xs={12} justify="center" alignItems="center" direction="column">
          Associated Files
        </Grid>
      </Grid>
    </Grid>
  )
}
