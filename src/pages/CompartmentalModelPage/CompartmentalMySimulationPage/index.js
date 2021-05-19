import React, { useState } from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { MySimulationsForm } from '../../../components/CompartmentalModels/mySimulationsForm'
import { useCompartamentalMySimulationForm } from './styles'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import TitleIcon from '../../../components/layouts/TitleIcon'
import { CheckBoxComponent } from '../../../components/CompartmentalModels/mySimulationsForm/CheckBoxComponent'
import { useComparmentalMySimulationState } from './state'
import { TableSimulationsComponent } from '../../../components/CompartmentalModels/mySimulationsForm/TableSimulationComponent'

const CompartmentalMySimulationPage = () => {
  
  const classes = useCompartamentalMySimulationForm()
  const { rowsFiltered,columns,filterForm,rows,handleClickPreview } = useComparmentalMySimulationState()

  const handleClickRemove = () =>{

    const deleteRows = rowsFiltered.filter(x => x.check === true)
    console.log(rows)
  }
  
  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <MySimulationsForm eventEmitter= {filterForm}/>
      </Grid>
      <br />
      <Grid container item xs={12} justify="flex-end">
        <Button
          onClick={handleClickRemove}
          variant="contained"
          color="grey"
          className={classes.buttonSearch}
          startIcon={<DeleteOutlineIcon />}
        >
            Remove Selected
        </Button>
      </Grid>
      <br />
      <TableSimulationsComponent 
        columns={columns} 
        rowsFiltered={rowsFiltered}  
        handleClickPreview={handleClickPreview}  
        classes={classes} />
    </Grid>

  )
}

export default CompartmentalMySimulationPage
