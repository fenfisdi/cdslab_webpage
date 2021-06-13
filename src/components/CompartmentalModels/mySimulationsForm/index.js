import { Input,Button,Grid } from '@material-ui/core'
import React, {useState } from 'react'
import theme from '../../../styles/cdslabTheme'
import { SelectComponent } from '../../ui/Select'
import { useMySimulationsForm } from './state'
import { useSimulationsStyles } from './styles'

export const MySimulationsForm = ({ eventEmitter,mySimulationsModels }) => {

  const classes = useSimulationsStyles(theme)
  const fieldsData = useMySimulationsForm()
  const [disabledMonth, setDisabledMonth] = useState(true)
  const [disabledDay, setDisabledDay] = useState(true)
  const [isValid] = useState(false)
  const {
    search,
    modelType,
    parameterType,
    optionsParameterType,
    year,
    month,
    day
  } = fieldsData
  
  const handleYear = (event) => {
    if(event.target.value > 0){
      setDisabledMonth(false)
    }else{
      setDisabledMonth(true)
    }
  }
  const handleMonth = (event) => {
    if(event.target.value > 0){
      setDisabledDay(false)
    }else{
      setDisabledDay(true)
    }
  }
  

  const handleClick = () => {
    eventEmitter({
      search: search.value,
      modelType: modelType.value,
      parameterType: parameterType.value,
      year: year.value,
      month: month.value,
      day: day.value,
    })
  }

  return (
    <div className={classes.root}>
      <Grid
        item
        xs={12}
        container 
        spacing={3}
      >
        <Grid container item justify='space-between' xs={8}>
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="off"
            placeholder="Simulation name..."
            {...search}
          />
          <Grid item xs={5}>
            <SelectComponent
              title="Model type"
              {...modelType}
              options={mySimulationsModels}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectComponent
              title="Parameter type"
              className={classes.selectComponent}
              {...parameterType}
              options= {optionsParameterType}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} container>
          <Grid item xs={3}>
            <div style={{textAlign: 'center', marginLeft: '-15px'}}>
              <p><strong>Simulation date :</strong></p>
            </div>
          </Grid>
          <Grid item container xs={9}>
            
            <Grid item xs={4}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="off"
                placeholder="Year"
                onKeyUp={handleYear}
                {...year}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                disabled={disabledMonth}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="off"
                placeholder="Month"
                onKeyUp={handleMonth}
                {...month}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                disabled={disabledDay}
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
        <Grid item xs={12} container justify="flex-end">
          <Button
            onClick={handleClick}
            variant="contained"
            className={classes.buttonSearch}
            disabled={!isValid ? false : true}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
