import React, { useState, Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { TitleComponent } from '../../../../ui/Title'
import { SelectComponent } from '../../../../ui/Select'
import ExtraParameters from '../extraParameters'
import { ParametersFormHeader, ParametersFormBody, ParametersFormHeaderItem } from './styles'


const ParametersForm = ({parameters,fieldsParametersForm}) => {

  return(
    <Fragment>
      <ParametersFormHeader>
        <ParametersFormHeaderItem justifyContent="flex-end" alignItems="center">
          <span>Parameter</span>
        </ParametersFormHeaderItem>
        <ParametersFormHeaderItem justifyContent="center" alignItems="center">
          <span>Configuration Type</span>      
        </ParametersFormHeaderItem>
        <ParametersFormHeaderItem justifyContent="flex-start" alignItems="center">
          <span>Value</span>
        </ParametersFormHeaderItem>
      </ParametersFormHeader>
      
      {parameters && parameters.map((parameter,index)=>{
        const { label, unit, representation } = parameter
        const { value } = fieldsParametersForm[label]['SELECTInput'] 
        const [errorText,setErrorText] = useState('')

        const handleShowError =(errorMessage)=>{
          setErrorText(errorMessage)          
        }
        
        return (
          <ParametersFormBody key={index}>
            
            <Grid container item xs={12}  direction="row" justify="center" alignItems="center" spacing={2}>
              <TitleComponent
                xs={2}
                justify={'flex-end'}
                alignItems={'center'}
                title={label}
                variant={'h6'}
                key={index}
                unit={representation}
              />

              <Grid container item xs={1}>
              </Grid>

              <SelectComponent
                xs={2}              
                title="Select Option"
                {...fieldsParametersForm[label]['SELECTInput']}  />
              
              {!value && 
              <Grid container item xs={1}>
              </Grid>}         
              
              {value && <ExtraParameters                 
                extraParameters={fieldsParametersForm[label][`${value}Input`]}
                handleShowError={handleShowError}
                xs={2}
              /> }

              <Grid item container xs={1} justify="flex-start" alignItems="center">
                {unit}
              </Grid>

            </Grid>

            <Grid container item xs={12} key={index} direction="row" justify="center" spacing={1}>
              <p style={{color:'red'}}>{errorText}</p>              
            </Grid>

          </ParametersFormBody>    
            
        )
      })}
    </Fragment>
  )
}

export default ParametersForm