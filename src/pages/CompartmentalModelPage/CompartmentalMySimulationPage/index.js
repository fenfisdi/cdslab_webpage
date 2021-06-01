import React, { useState } from 'react'
import { Button, Grid} from '@material-ui/core'
import { MySimulationsForm } from '../../../components/CompartmentalModels/mySimulationsForm'
import { useCompartamentalMySimulationForm } from './styles'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { useComparmentalMySimulationState } from './state'
import { TableSimulationsComponent } from '../../../components/CompartmentalModels/mySimulationsForm/TableSimulationComponent'
import { Alert } from '@material-ui/lab'
import LoaderComponent from '../../../components/ui/Loader'
import { ContainerTitle } from '../../SimulationModelPage/SimulationMainPage/styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import SupportComponent from '../../../components/SupportComponent'
import notesPixelIcon from '../../../assets/images/notes_pixel_perfect.svg'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'

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
          <Grid container item xs={12} justify="center" alignItems="center" direction="column" style={{marginTop:'20px'}}>
            <ContainerTitle>
              <TitleIcon title={'My Simulations'} icon={notesPixelIcon}/>
              <SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS}/>
            </ContainerTitle>
            <Grid container item xs={12} justify="center" alignItems="center" direction="column">
              <MySimulationsForm eventEmitter= {filterForm}/>
            </Grid>
            <br />
            
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
            <Grid container item xs={12} justify="flex-end">
              <Button
                onClick={handleClickRemove}
                variant="contained"
                className={classes.buttonSearch}
                endIcon={<DeleteOutlineIcon />}
              >
            Remove Selected
              </Button>
            </Grid>
          </Grid>
        )
      }
    </div>

  )
}

export default CompartmentalMySimulationPage
