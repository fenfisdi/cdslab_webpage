import React, { useState } from 'react'
import { Button, Grid} from '@material-ui/core'
import { MySimulationsForm } from '../../../components/CompartmentalModels/mySimulationsForm'
import { useCompartamentalMySimulationForm } from './styles'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { useComparmentalMySimulationState } from './state'
import { TableSimulationsComponent } from '../../../components/CompartmentalModels/mySimulationsForm/TableSimulationComponent'
import { Alert } from '@material-ui/lab'
import LoaderComponent from '../../../components/ui/Loader'

const CompartmentalMySimulationPage = () => {
  
  const classes = useCompartamentalMySimulationForm()
  const { 
    loading,
    rowsFiltered,
    setRowsFiltered,
    columns,
    filterForm,
    handleClickPreview,
    handleClickDelete
  } = useComparmentalMySimulationState()
  const [alert, setAlert] = useState(false)


  const handleClickRemove = () =>{

    const deleteRows = rowsFiltered.filter(x => x.check === true)
    if(deleteRows.length > 0){
      handleClickDelete(deleteRows)
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000)
    }
    
  }
  const handleCheck = (row) => {
    console.log(row)
    rowsFiltered.map((elem) => {
      if(elem.identifier === row.identifier){
        elem.check = !elem.check
      }
    })
    setRowsFiltered(rowsFiltered)
  }
  return (
    <div>
      {loading ? 
        (<LoaderComponent
          width={50}
          height={50}
          marginTop={5}
        />)
        :
        (
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
            {
              alert &&
          <Alert severity="success">Simulations were successfully removed</Alert>
            }
            <TableSimulationsComponent 
              columns={columns} 
              rowsFiltered={rowsFiltered}  
              handleClickPreview={handleClickPreview}  
              classes={classes} 
              handleCheck={handleCheck}
            />
          </Grid>
        )
      }
    </div>

  )
}

export default CompartmentalMySimulationPage
