import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Fragment } from 'react'
import { TitleComponent } from '../../../../ui/Title'
import { SelectComponent } from '../../../../ui/Select'
import ExtraParameters from '../extraParameters'


const ParametersForm = ({parameters,fieldsParametersForm}) => {

  return(
    <Fragment>
      {parameters && parameters.map((parameter,index)=>{
        const { label, unit, representation } = parameter
        const { value } = fieldsParametersForm[label]['SELECTInput'] 
        const [errorText,setErrorText] = useState('')

        const handleShowError =(errorMessage)=>{
          setErrorText(errorMessage)          
        }
        
        return (
          <Grid container item xs={12}  direction="column" justify="center" alignItems="center" key={index}>
            
            <Grid container item xs={12}  direction="row" justify="center" alignItems="center" spacing={1}>
              <TitleComponent
                xs={2}
                justify={'flex-end'}
                alignItems={'center'}
                title={label}
                variant={'h6'}
                key={index}
                unit={representation}
              />
              
              <SelectComponent
                xs={3}              
                title="Select Option"
                {...fieldsParametersForm[label]['SELECTInput']}  />                
              
              {value && <ExtraParameters                 
                extraParameters={fieldsParametersForm[label][`${value}Input`]}
                handleShowError={handleShowError}
              /> }

              <Grid item container xs={1} justify="flex-start" alignItems="center">
                {unit}
              </Grid>

            </Grid>

            <Grid container item xs={12} key={index} direction="row" justify="center" spacing={1}>
              <p style={{color:'red'}}>{errorText}</p>              
            </Grid>

          </Grid>    
            
        )
      })}
    </Fragment>
  )
}

export default ParametersForm