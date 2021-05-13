import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { useParametersFormFieldsCreation } from '../ParametersForm/fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'




const FixedParametersFormStateVariables = ({
  fieldsSchema,
  loading}) => {
  const fields = useParametersFormFieldsCreation({fieldsSchema})
  useEffect(()=>{
    console.log('::::::::::::::::>fields',fields)
  },[fields])
  
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" >
              Configure State Variables  Initial Values
        </Typography>
      </Grid>
      {!loading && <ParametersForm fields={fields} fieldsSchema={fieldsSchema} />}

      <CompartmentalButton
        disabled={true}
        onClick={()=>{console.log('::::::::::::::::::::>comaprmental')}}
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />  

    </>
  )
}

export default FixedParametersFormStateVariables
