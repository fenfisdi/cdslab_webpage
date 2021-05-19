import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { TitleComponent } from '../../../../ui/Title'
import { Input } from '../../../../ui/Input'
import { useParametersFormStyle } from './styles'


const ParametersForm = ({fields, fieldsSchema}) => {
  
  
  const classes = useParametersFormStyle()
  
  return (
    <Grid 
      xs={12}
      container
      item 
    >
      {fieldsSchema && fieldsSchema.map((field,index)=>{
        const {label, representation, unit } = field
        const {helperText}= fields[label]
        delete fields[label]['helperText']
        
        return (
          <Grid key={index}  item container xs={12} direction="column" justify="center" alignItems="center">
            <Grid item container xs={12} key={index} direction="row" justify="center" alignItems="center" spacing={2}>
              <TitleComponent
                xs={4}
                justify='flex-end'
                alignItems='center'
                title={label}
                unit={representation}
                variant='h6'
                key={index}
              />
              <Grid item container xs={2}>
                <Input
                  disabled={false}
                  required                  
                  variant="outlined"
                  margin="normal"
                  autoComplete="name"
                  {...fields[label]}  
                />              
              </Grid>        
              <Grid item container xs={4} justify="flex-start" alignItems="center">
                {unit}
              </Grid>
            </Grid>
            <Typography variant="body1" component="p" className={helperText ? classes.helperText + ' error': classes.helperText}>
              {helperText}
            </Typography>
          </Grid>
        )
      })}

      {!fieldsSchema && <p>No hay campos</p>}

    </Grid>
  )
}

export default ParametersForm
