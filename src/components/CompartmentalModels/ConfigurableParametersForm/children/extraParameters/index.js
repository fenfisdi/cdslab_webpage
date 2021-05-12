import React, { useEffect }  from 'react'
import { Grid } from '@material-ui/core'

import { Input } from '../../../../ui/Input'
import { checkErrorsExtraParametersForm } from './validators'



const ExtraParameters = ({ extraParameters=[], handleShowError }) => {
 
 
  useEffect(()=>{
    checkErrorsExtraParametersForm({extraParameters,handleShowError})        
  },[extraParameters])


  return (  
    <Grid container item xs={extraParameters.length+1}>     
      {extraParameters.length>0 && extraParameters.map((parameter,index)=>{              
        delete parameter['helperText']        
        return (
          <Grid container item xs key={index} justify="center" alignItems="center">
            <Input              
              disabled={false}
              required                  
              variant="outlined"
              margin="normal"
              autoComplete="name"
              {...parameter}  
            />   
            
          </Grid>          
        )
      })}
    </Grid>

   
      

    

  )
}

export default ExtraParameters
