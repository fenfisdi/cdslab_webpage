import { Input,Button,Grid } from '@material-ui/core'
import React, {useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import theme from '../../../styles/cdslabTheme'
import { SelectComponent } from '../../ui/Select'
import { useNewConfigurationForm } from './state'
import { 
  AgentNameConfigurationFormInput, 
  AgentsModelForm,
  useNewConfigurationStyles, 
  AgentsModelCenterInputsForm,
  AgentsModelContainerInputsForm
} from './styles'

export const NewConfigurationForm = ({ eventEmitter }) => {

  const classes = useNewConfigurationStyles(theme)
  const fieldsData = useNewConfigurationForm()
  const [isValid] = useState(false)
  const match = useRouteMatch()
  const history = useHistory()
  
  const {
    nameConfiguration,
    simulationInitialDate,
    simulationFinalDate,
    iterationTime,
    populationSize,
    boxHorizontalSize,
    boxVerticalSize,
    timeUnits,
    optionsTimeUnits,
    distanceUnits,
    optionsDistanceUnits
  } = fieldsData

  const handleClick = () => {
    history.push(`${match.path}/agentsAgeGroups`)
    eventEmitter({
      nameConfiguration:nameConfiguration.value,
      simulationInitialDate:simulationInitialDate.value,
      simulationFinalDate:simulationFinalDate.value,
      iterationName:iterationTime.value,
      populationSize:populationSize.value,
      boxHorizontalSize:boxHorizontalSize.value,
      boxVerticalSize:boxVerticalSize.value,
      timeUnits:timeUnits.value,
      distanceUnits:distanceUnits.value,
    })
  }

  return (
    <div className={classes.root}>
      <AgentsModelForm>
        <AgentNameConfigurationFormInput>
          <span><strong>Name your configuration:</strong></span>
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="off"
            {...nameConfiguration}
          />
        </AgentNameConfigurationFormInput>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm>
            <strong>Simulation initial Date</strong>
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="off"
              placeholder="KeyWord..."
              {...simulationInitialDate}
            />
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <strong>Simulation Final Date</strong>
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="off"
              placeholder="KeyWord..."
              {...simulationFinalDate}
            />
          </AgentsModelCenterInputsForm>
        </AgentsModelContainerInputsForm>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm style={{marginTop: '20px'}}>
            <Grid container xs='12'>
              <Grid container xs='5' style={{marginTop: '10px'}}>
                <strong>Iteration Time</strong>
              </Grid> 
              <Grid container xs='3'>
                <Input
                  disabled={false}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="off"
                  {...iterationTime}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <SelectComponent
              title="Model Type"
              {...timeUnits}
              options={optionsTimeUnits}
            />
          </AgentsModelCenterInputsForm>
        </AgentsModelContainerInputsForm>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm>
            <Grid container xs='12'>
              <Grid container xs='5' style={{marginTop: '10px'}}>
                <strong>Population Size</strong>
              </Grid> 
              <Grid container xs='3'>
                <Input
                  disabled={false}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="off"
                  {...populationSize}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
        </AgentsModelContainerInputsForm>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm>
            <Grid container xs='12'>
              <Grid container xs='5' style={{marginTop: '10px'}}>
                <strong>Box horizontal size </strong>
              </Grid> 
              <Grid container xs='3'>
                <Input
                  disabled={false}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="off"
                  {...boxHorizontalSize}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
        </AgentsModelContainerInputsForm>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm style={{marginTop: '20px'}}>
            <Grid container xs='12'>
              <Grid container xs='5' style={{marginTop: '10px'}}>
                <strong>Box Vertical size </strong>
              </Grid> 
              <Grid container xs='3'>
                <Input
                  disabled={false}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="off"
                  {...boxVerticalSize}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <SelectComponent
              title="Parameter Type"
              className={classes.selectComponent}
              {...distanceUnits}
              options= {optionsDistanceUnits}
            />
          </AgentsModelCenterInputsForm>
        </AgentsModelContainerInputsForm>
      </AgentsModelForm>
      <Grid item xs={12} container justify="flex-end">
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          className={classes.buttonSearch}
          disabled={!isValid ? false : true}
        >
            Continue
        </Button>
      </Grid>
    </div>
  )
}
