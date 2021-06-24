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

export const AgentsModalConstant = ({ modalSettings, setComponentChildren }) => {
  const classes = useAgentsModalConstantStyles()
  const name = useInputValue('', [], {
    name: 'name',
    type: 'text',
    label: 'name',
  })

  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }
  
  const handleSaveInformation =(item)=>{
    console.log(item)
    console.log(name)
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Constant</span></Grid>
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
