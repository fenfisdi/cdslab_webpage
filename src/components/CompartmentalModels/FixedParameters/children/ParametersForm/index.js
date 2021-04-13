import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'

import { COMPARTMENTAL_FIELDS } from '../../../../../constants/compartmental'
import { useParametersFormState } from './state'
import { TitleComponent } from '../../../../ui/Title'
import { Input } from '../../../../ui/Input'
import { useParametersFormFieldsCreation } from './fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'


const ParametersForm = ({modelIndetifier,formParametersSave}) => {
  const {fields:formFields} = COMPARTMENTAL_FIELDS[modelIndetifier] || {}
  const fields = useParametersFormFieldsCreation({formFields})
  const {
    handleClickButton,    
    isValid
  } = useParametersFormState({fields,formParametersSave})
  
  return (
    <Grid 
      xs={12}
      container
      item 
    >
      {formFields && formFields.map((field,index)=>{
        const {indetifier, label, tag } = field
        return (
          <Grid item container xs={12} key={index} direction="row" justify="center" alignItems="center" spacing={3}>
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
                fullWidth
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
        )
      })}
      {!formFields && <p>No hay campos</p>}
      <CompartmentalButton
        disabled={!isValid ? false:true}
        onClick={handleClickButton}        
        justify="center"
        alignItems="center"
        text={'Configure State Variables Settings'}
      />
    </Grid>
  )
}

export default ParametersForm
