import React, { useEffect, useState } from 'react'
import { Table,TableRow,TableCell,Grid, makeStyles, TextField } from '@material-ui/core'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../SupportComponent'
import { Button } from '../../../ui/Buttons'
import { SelectComponent } from '../../../ui/Select'
import { useAgentsModalNumpyState } from './state'
import { isEmpty } from 'lodash'

export const useAgentsModalConstantStyles = makeStyles(() => ({
  Input:{
    background:'#eceff1',
    '& div':{
      background:'white'
    }
  },
  text:{
    fontSize:'17px',
    fontWeight:'600',
    marginRight:'20px'
  },
  title:{
    color:'#006064',
    fontSize:'20px',
    fontWeight: 500
  }
}))

export const AgentsModalNumpy = ({ modalSettings,handlerDataStorage, setComponentChildren, parameterList,componentChildren }) => {
  const classes = useAgentsModalConstantStyles()
  const [isValid,setIsValid] = useState(false)
  const parameterNumpy = parameterList[componentChildren.toLowerCase()]
  const {numpySelect,optionsSelectNumpy,fieldsFormat} = useAgentsModalNumpyState()
  const fieldsForm = fieldsFormat(parameterNumpy.type)
  console.log(fieldsForm)
  const optionsNumpy = optionsSelectNumpy(parameterNumpy.type)

  const handleGoBack = () =>{
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
  }

  useEffect(()=>{
    if(!isEmpty(fieldsForm)){
      let validation = false
      const FieldsSelect = fieldsForm.filter(element => element.parameter == numpySelect.value)
      if(FieldsSelect){
        for (let i = 0; i <FieldsSelect.length; i++) {
          let value = FieldsSelect[i]?.input?.props?.value
          if(value == ''){
            validation = true
            return
          }
        }
      }
      setIsValid(validation)
    }
  },[fieldsForm])

  const handleSaveInformation =(item)=>{
    const { distribution, distribution: {kwargs} } = item
    distribution.type = componentChildren.toLowerCase()
    const FieldsSelect = fieldsForm.filter(element => element.parameter == numpySelect.value)
    if(FieldsSelect){
      for (let i = 0; i <FieldsSelect.length; i++) {
        let value = FieldsSelect[i]?.input?.props?.value
        if(value.indexOf(',') != '-1'){
          value = value.split(',')
        } 
        kwargs[FieldsSelect[i].name.toLowerCase()] = value
      }
    }
    item.numpy_type = numpySelect.value
    item.state = 'CONFIGURED'
    handlerDataStorage(item)
  }
  
  return (
    
    <Grid container item xs={12} justify='center' alignItems='center' direction='column' >
      
      <Grid container item 
        xs={12}
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid xs={11} container item justify='center' alignItems='center'><span className={classes.title}>Numpy</span></Grid>
        <Grid xs={1}  container   item justify='flex-end'><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
  
      <Grid container item xs={12} justify='center' alignItems='center' direction='row'>
        <SelectComponent
          required
          title="Numpy"
          {...numpySelect}
          options={optionsNumpy}
        />
      </Grid>
      <Grid container item xs={12} justify='center' alignItems='center' direction='row'>
        <Table>
          <TableRow>
            <TableCell>
              Parameter
            </TableCell>
            <TableCell>
              Value
            </TableCell>
          </TableRow>
          {
            numpySelect.value ?
              fieldsForm.filter(element => element.parameter == numpySelect.value)
                .map((row,index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {row.input}
                    </TableCell>
                  </TableRow>
                ))
              : (
                <TableRow>
                  <TableCell>
                    Seleccione un numpy
                  </TableCell>
                </TableRow>
              )
          }
        </Table>
      </Grid>

        
      <Grid container item xs={12} justify='flex-end' alignItems='center' direction='row'>
        <Button color="primary" disabled={isValid?true:false} onClick={() => handleSaveInformation(modalSettings?.item)}>Done</Button>
        <Button onClick={() => handleGoBack()}>Cancel</Button>
      </Grid>
      
    </Grid>
    
  )
}
