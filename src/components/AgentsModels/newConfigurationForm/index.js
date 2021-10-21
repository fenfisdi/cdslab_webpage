import { Button,Grid } from '@material-ui/core'
import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../../styles/cdslabTheme'
import DatePicker from '../../ui/DatePicker'
import { Input } from '../../ui/Input'
import { SelectComponent } from '../../ui/Select'
import { useNewConfigurationForm } from './state'
import { 
  AgentNameConfigurationFormInput, 
  AgentsModelForm,
  useNewConfigurationStyles, 
  AgentsModelCenterInputsForm,
  AgentsModelContainerInputsForm
} from './styles'

export const NewConfigurationForm = ({ eventEmitter,listConfigurationDistance,listConfigurationTime }) => {

  const classes = useNewConfigurationStyles(theme)
  const fieldsData = useNewConfigurationForm()
  const [isValid, setIsvalid] = useState(false)
  const history = useHistory()
  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  const [showError, setShowError] = useState(false)

  const {
    nameConfiguration,
    iterationTime,
    populationSize,
    boxHorizontalSize,
    boxVerticalSize,
    timeUnits,
    distanceUnits,
  } = fieldsData

  useEffect(() => {
    let notIsValid = false
    for (var key in fieldsData) {
      if(fieldsData[key].errors == undefined ||  !fieldsData[key].errors ){
        fieldsData[key].errors = []
      }
      if(
        (fieldsData[key].type != 'date') &&
        (fieldsData[key] && typeof fieldsData[key].value !='object' && !fieldsData[key].value.length > 0) ||
        (fieldsData[key] && Array.isArray(fieldsData[key].errors) && fieldsData[key].errors.length > 0)       
      ){
        notIsValid = true
      }
      validDate(fieldsData[key].type)
    }
    
    setIsvalid(notIsValid)
  }, [fieldsData])

  const validDate = (fieldsDataType) => {
    if(fieldsDataType == 'date'){
      if(initialDate == null){
        return true 
      }
      if(finalDate == null){
        return true
      }
    }
  }
  const handleClick = () => {
    history.push({
      pathname: 'agentsAgeGroups'
    })
    // eventEmitter({
    //   name:nameConfiguration.value,
    //   interval_date: {
    //     start : initialDate,
    //     end : finalDate
    //   },
    //   iteration_number:iterationTime.value,
    //   population_number:populationSize.value,
    //   box_size: {
    //     horizontal : boxHorizontalSize.value,
    //     vertical : boxVerticalSize.value
    //   },
    //   iteration_time_units:timeUnits.value,
    //   distance_units:distanceUnits.value,
    // })
  }

  const addDays = (date, days) => {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const handleDate = (dateValue, key) => {
    setShowError(false)
    if (key == 'initial') {
      setInitialDate(dateValue)
      setFinalDate(null)
    } else if (key == 'final') {
      setFinalDate(dateValue)
    }
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
            autoComplete="nameConfiguration"
            {...nameConfiguration}
          />
        </AgentNameConfigurationFormInput>
        <AgentsModelContainerInputsForm>
          <AgentsModelCenterInputsForm>
            <strong>Simulation initial Date</strong>
            <DatePicker
              autoOk
              disabled={false}
              onChange={e => handleDate(e, 'initial')}
              value={initialDate}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              lenguaje="es"
              id='initial'                            
            />    
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <strong>Simulation Final Date</strong>
            <DatePicker
              autoOk
              disabled={false}
              onChange={e => handleDate(e, 'final')}
              value={finalDate}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              lenguaje="es"
              id='final'
              error={showError}      
              minDate={initialDate != null && addDays(initialDate, 3)}                      
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
                  autoComplete="iterationTime"
                  {...iterationTime}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <SelectComponent
              required
              title="Time Units"
              {...timeUnits}
              options={listConfigurationTime}
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
                  autoComplete="populationSize"
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
                  autoComplete="boxHorizontalSize"
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
                  place
                  autoComplete="boxVerticalSize"
                  {...boxVerticalSize}
                />
              </Grid>
            </Grid>
          </AgentsModelCenterInputsForm>
          <AgentsModelCenterInputsForm>
            <SelectComponent
              required
              title="Distance Units"
              className={classes.selectComponent}
              {...distanceUnits}
              options= {listConfigurationDistance}
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
          disabled={isValid}
        >
            Continue
        </Button>
      </Grid>
    </div>
  )
}
