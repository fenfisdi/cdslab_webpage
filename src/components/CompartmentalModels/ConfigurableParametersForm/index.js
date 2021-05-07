import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useConfigurableParametersFormFieldsCreation } from './fieldsCreation'
import { SelectComponent } from '../../ui/Select'
import { TitleComponent } from '../../ui/Title'


const ConfigurableParametersForm = ({parameters}) => {
  
  const fields = useConfigurableParametersFormFieldsCreation({parameters})
  console.log('estos son los parameters:::::::::::::>',parameters)
  console.log('estos son los fiels:::::::::::::>',fields)
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p">
        ConfigurableParametersForm
        </Typography>
      </Grid>
      {parameters && parameters.map((field,index)=>{
        const { label, representation,unit } = field
        const {helperText}= fields[label]
        
        
        return (
          <Grid key={index}  item container xs={12} direction="column" justify="center" alignItems="center">
            <Grid item container xs={12} key={index} direction="row" justify="center" alignItems="center" spacing={2}>
              <TitleComponent
                xs={3}
                justify={'flex-end'}
                alignItems={'center'}
                title={label}
                variant={'h6'}
                key={index}
              />
              <Grid item container xs={6}>
                <SelectComponent
                  xs={6}
                  title="Select Variable"
                  {...fields[label]} 
                  options={[]} />
                {/* <Input
                  disabled={false}
                  required                  
                  variant="outlined"
                  margin="normal"
                  autoComplete="name"
                   
                /> */}              
              </Grid>        
              <Grid item container xs={3} justify="flex-start" alignItems="center">
                {unit}
              </Grid>
            </Grid>
            {/* <Typography variant="body1" component="p" className={helperText ? classes.helperText + ' error': classes.helperText}>
              {helperText}
            </Typography> */}
          </Grid>
        )
      })}

      

    </Grid>

  )

  
}

export default ConfigurableParametersForm
