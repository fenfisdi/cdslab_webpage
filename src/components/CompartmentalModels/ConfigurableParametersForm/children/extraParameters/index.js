import React, { useEffect }  from 'react'
import { Grid } from '@material-ui/core'

import { Input } from '../../../../ui/Input'



const ExtraParameters = ({ extraParameters=[], handleShowError }) => {
  useEffect(()=>{
    
    let countNoError = 0
    extraParameters.forEach((fieldExtraParameters)=>{
      const {errors} = fieldExtraParameters
      if(errors.length>0){
        console.log('::::::::::::::erormaessage',errors.map(e => e.message)?.join('\n'))
        handleShowError(errors.map(e => e.message)?.join('\n'))
        return
      }  
      countNoError = countNoError +1               
    })
    if(countNoError == extraParameters.length){
      handleShowError('')
      if(extraParameters.length == 2){
        const {value:valueFirst} = extraParameters[0]
        const {value:valueSecond } = extraParameters[1]         
        if(valueSecond!='' && valueFirst>valueSecond){            
          handleShowError('The minimum value must be less than maximum value')
        }          
      }
    }
    
    
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
