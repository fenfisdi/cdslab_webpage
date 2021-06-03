import React, { useEffect }  from 'react'
import { Grid } from '@material-ui/core'

import { Input } from '../../../../ui/Input'
import { checkErrorsExtraParametersForm } from './validators'

import { makeStyles } from '@material-ui/core/styles'

export const useExtraParametersStyles = makeStyles(() => ({
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  }
}))


const ExtraParameters = ({ extraParameters=[], handleShowError, xs, errorText }) => {
  const classes = useExtraParametersStyles()
 
  useEffect(()=>{
    checkErrorsExtraParametersForm({extraParameters,handleShowError})        
  },[extraParameters])


  return (  
    <Grid container item xs={xs} direction="column">   
      <Grid container item  direction="row">     
        {extraParameters.length>0 && extraParameters.map((parameter,index)=>{              
          delete parameter['helperText']        
          return (
            <Grid container item xs key={index} justify="center" alignItems="center" style={{marginRight:'2px'}}>
              <Input              
                disabled={false}
                required                  
                variant="outlined"
                margin="normal"
                autoComplete="name"
                className={classes.Input}                
                {...parameter}  
              />   
            
            </Grid>          
          )
        })}        
      </Grid>
      <Grid container item xs={12}  direction="row" justify="center" alignItems="center" spacing={1}>
        <p style={{color:'red'}}>{errorText}</p>              
      </Grid> 
    </Grid>

   
      

    

  )
}

export default ExtraParameters
