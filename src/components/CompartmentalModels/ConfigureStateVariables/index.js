import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { COMPARTMENTAL_FIELDS } from '../../../constants/compartmental'
import { Input } from '../../ui/Input'
import { TitleComponent } from '../../ui/Title'
import CompartmentalButton from '../CompartmentalButton'
import { useConfigureStateVariablesCreation } from './fieldsCreation'
import { useConfigureStateVariablesState } from './state'
import { useConfigureStateVariablesStyles } from './styles'




const ConfigureStateVariables = ({modelIndetifier,formConfigureStateVariablesSave, stateVariableValues}) => {
  const classes = useConfigureStateVariablesStyles()
  const {fieldStates:formFields} = COMPARTMENTAL_FIELDS[modelIndetifier] || {}
  const fields = useConfigureStateVariablesCreation({formFields,stateVariableValues})
  const {
    handleClickButton,    
    isValid
  } = useConfigureStateVariablesState({fields,formConfigureStateVariablesSave})
  

  return (
    <Grid 
      xs={12}
      container
      item 
    >
      {formFields && formFields.map((field,index)=>{
        const {indetifier, label, tag } = field
        const {helperText}= fields[indetifier]
        delete fields[indetifier]['helperText']
        
        return (
          <Grid key={index}  item container xs={12} direction="column" justify="center" alignItems="center">
            <Grid item container xs={12} key={index} direction="row" justify="center" alignItems="center" spacing={2}>
              <TitleComponent
                xs={4}
                justify={'flex-end'}
                alignItems={'center'}
                title={label}
                variant={'h6'}
                key={index}
              />
              <Grid item container xs={1}>
                <Input
                  disabled={false}
                  required                  
                  variant="outlined"
                  margin="normal"
                  autoComplete="name"
                  {...fields[indetifier]}  
                />              
              </Grid>        
              <Grid item container xs={4} justify="flex-start" alignItems="center">
                {tag}
              </Grid>
            </Grid>
            <Typography variant="body1" component="p" className={helperText ? classes.helperText + ' error': classes.helperText}>
              {helperText}
            </Typography>
          </Grid>
        )
      })}

      {!formFields && <p>No hay campos</p>}
      <CompartmentalButton
        disabled={!isValid ? false:true}
        onClick={handleClickButton}        
        justify="center"
        alignItems="center"
        text={'Review Configurations'}
      />
      
    </Grid>
  )
}

export default ConfigureStateVariables
