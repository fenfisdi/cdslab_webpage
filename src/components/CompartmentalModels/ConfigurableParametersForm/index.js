import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useConfigurableParametersFormFieldsCreation } from './fieldsCreation'
import { SelectComponent } from '../../ui/Select'
import { TitleComponent } from '../../ui/Title'
import ExtraParameters from './children/extraParameters'
import { Fragment } from 'react'
import { showError } from './children/extraParameters/validators'


const ConfigurableParametersForm = ({parameters}) => {
  
  const fieldsParametersForm = useConfigurableParametersFormFieldsCreation({parameters})
  console.log('ConfigurableParametersForm parameters:::::::::::::>',parameters)
  console.log('ConfigurableParametersForm fields:::::::::::::>',fieldsParametersForm)
  return (
    <Grid container item xs={12}>
      
      {parameters && parameters.map((field,index)=>{
        const { label, unit, maxValue, minValue } = field
        const { value } = fieldsParametersForm[label] 
        const [errorText,setErrorText] = useState('')
        
        const handleShowError =(fieldsExtraParameters)=>{              
          console.log('::::::::::::::::>fieldsExtraParameters',fieldsExtraParameters)
          setErrorText(fieldsExtraParameters)
          //showError(fieldsExtraParameters,setErrorText)
        }

        return (
          <Fragment key={index}>
            <Grid container item xs={12}  direction="row" justify="center" spacing={1}>
              <TitleComponent
                xs={2}
                justify={'flex-end'}
                alignItems={'center'}
                title={label}
                variant={'h6'}
                key={index}
              />
              
              <SelectComponent
                xs={3}              
                title="Select Variable"
                {...fieldsParametersForm[label]}  />                
              
              {value && <ExtraParameters parentValue={value} maxValue={maxValue} minValue={minValue} showError={handleShowError}/> }

              <Grid item container xs={1} justify="flex-start" alignItems="center">
                {unit}
              </Grid>

            </Grid>  
            <Grid container item xs={12} key={index} direction="row" justify="center" spacing={1}>
              <p  style={{color:'red'}}>{errorText}</p>              
            </Grid> 
          </Fragment>    
            
        )
      })}

      

    </Grid>

  )

  
}

export default ConfigurableParametersForm
