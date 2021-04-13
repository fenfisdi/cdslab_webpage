import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'

import { COMPARTMENTAL_FIELDS } from '../../../../../constants/compartmental'
import { useParametersFormState } from './state'
import { TitleComponent } from '../../../../ui/Title'
import { Input } from '../../../../ui/Input'
import { useParametersFormFieldsCreation } from './fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'


const ParametersForm = ({modelIndetifier}) => {
  const {fields:formFields} = COMPARTMENTAL_FIELDS[modelIndetifier] || {}
  const fields = useParametersFormFieldsCreation({formFields})
  const {
    handleClickButton,    
    isValid
  } = useParametersFormState({fields})
  
  console.log(':::::::::::>fields',fields)
  console.log(':::::::::::::>modelIndetifier',modelIndetifier)
  console.log(':::::::::::::>formFields',formFields)
  console.log('::::::::::::::>isValid',isValid)

  return (
    <Grid 
      xs={12}
      container
      direction="column" 
      justify="center" 
      alignItems="center"
      spacing={2}
    >
      {formFields && formFields.map((field,index)=>{
        const {indetifier, label, tag } = field
        return (
          <Grid item container xs={12} key={index} direction="row" justify="center" alignItems="center">
            <TitleComponent
              xs={3}
              justify={'center'}
              alignItems={'center'}
              title={label}
              variant={'h6'}
              key={index}
            />
            <Grid item container xs={4}>
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
            <Grid item container xs={2} justify="center" alignItems="center">
              {tag}
            </Grid>
          </Grid>
        )
      })}
      {!formFields && <p>No hay campos</p>}
      <CompartmentalButton        
        justify="center"
        alignItems="center"
        text={'Configure State Variables Settings'}
      />
    </Grid>
  )
}

export default ParametersForm
