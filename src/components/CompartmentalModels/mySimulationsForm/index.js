import { Input } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import theme from '../../../styles/cdslabTheme'
import { SelectComponent } from '../../ui/Select'
import { useMySimulationsForm } from './state'
import { useSimulationsStyles } from './styles'

export const MySimulationsForm = ({ eventEmitter, loading }) => {

  const classes = useSimulationsStyles(theme)
  const fieldsData = useMySimulationsForm()

  const {
    search,
    modelType,
    parameterType,
    year,
    month,
    day
  } = fieldsData

  return (
    <div className={classes.root}>
      <Grid
        xs={12}
        container 
        spacing={3}
      >
        <Grid container item xs={8}>
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="off"
            placeholder="KeyWord..."
            {...search}
          />
          <Grid item xs={6}>
            <SelectComponent
              title="Model Type"
              {...modelType}
              options={modelType.options} />
          </Grid>
          <Grid item xs={6}>
            <SelectComponent
              title="Parameter Type"
              {...parameterType}
              options={parameterType.options} />
          </Grid>
        </Grid>
        <Grid item xs={4} container>
          <Grid item xs={3}>
            <div className={classes.titleDate}>
              <p>Date :</p>
            </div>
          </Grid>
          <Grid item xs={9}>
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="off"
              placeholder="Year"
              {...year}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="off"
              placeholder="Month"
              {...month}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="off"
              placeholder="Day"
              {...day}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
