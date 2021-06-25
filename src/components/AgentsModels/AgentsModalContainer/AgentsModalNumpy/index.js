import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import { Button } from '../../../ui/Buttons'
import { Input } from '../../../ui/Input'
import { useInputValue } from '../../../ui/Input/useInputValue'

export const useAgentsModalConstantStyles = makeStyles(() => ({
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  },
  text:{
    fontSize:'17px',
    fontWeight:'600',
    marginRight:'20px'
  },
  title:{
    color:'#006064',
    fontSize:'20px',
    fontWeight: 500
  }
}))

export const AgentsModalNumpy = ({ modalSettings, setComponentChildren }) => {
  const classes = useAgentsModalConstantStyles()
  const {type_constant} = modalSettings?.item?.distribution?.distribution_extra_arguments
  const name = useInputValue(type_constant?type_constant:'', [], {
    name: 'name',
    type: 'text',
    label: 'name',
  })

  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }
  
  const handleSaveInformation =(item)=>{
    const { distribution: {distribution_extra_arguments} } = item
    distribution_extra_arguments['type_constant'] = name.value
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Numpy</span></Grid>
        <Grid xs={1}  container   item justify='flex-end'><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
  
      <Grid container item xs={12} justify='center' alignItems='center' direction='row'>
        <div className={classes.text}>
          <strong>Type constant:</strong>
        </div>
        <Input
          disabled={false}
          required
          variant="outlined"
          margin="normal"
          autoComplete="name"
          className={classes.Input}
          {...name}
        />
      </Grid>

        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" onClick={() => handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
