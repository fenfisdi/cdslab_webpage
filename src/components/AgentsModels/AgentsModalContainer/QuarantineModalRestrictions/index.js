import { Typography, Grid  } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CompartmentalButton from '../../../CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../SupportComponent'
import DividerCommon from '../../../ui/DividerCommon'
import QuarantineTitleForm from '../../AgentsQuarantine/QuarantineTitleForm'
import AgentsTable from '../../AgentsTable'



export const QuarantineModalRestrictions = ({modalSettings,hanldeDone,globalCuarantineTimeInput,fieldsToModal}) => {
  const[isValid,setIsValid] = useState(false)
  
  useEffect(()=>{
    let validation = false
    fieldsToModal?.body.every(field => {      
      if (field?.type?.props?.value == '' || parseInt(field?.type?.props?.value) > parseInt(globalCuarantineTimeInput.value) || field?.units?.props?.value == '' ) {
        validation = true
        return false
      }                  
      validation = false        
      return true
    })
    setIsValid(validation)    
  },[fieldsToModal])


  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        
        <Grid container item xs={12} direction="row">
          <Grid container item xs={11} alignContent='center' justify='center' style={{color:'#006064'}}>
            <QuarantineTitleForm
              title='Cyclic Quarantine Restrictions - Group Info'
              justify='center' 
              alignItems='center' 
              style={{background:'#CFD8DC', padding:'10px', color:'black', width:'60%'}}
            />
            <DividerCommon />
          </Grid>
          <Grid container item xs={1}>
            <Grid><SupportComponent title="Help" text={'Contenido de ayuda'} /></Grid>
          </Grid>          
        </Grid>
        
        <Typography align="center" style={{marginRight:'60px', color:'#006064', fontSize:'22px', fontWeight:'600'}}>{modalSettings?.item?.name}</Typography>

        <AgentsTable tableFields={fieldsToModal} />

        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Done'
          onClick={hanldeDone}
          disabled={isValid?true:false}
        />  
  
      </Grid>
    </div>
  )
}
