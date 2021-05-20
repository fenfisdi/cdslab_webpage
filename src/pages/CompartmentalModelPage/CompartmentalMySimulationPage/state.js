import { useEffect, useState } from 'react'
import { useMySimulationActions } from '@actions/mySimulationsActions'
import { useStore } from '../../../store/storeContext'
import { useComparmentalMySimulationFilter } from './filter'

export const useComparmentalMySimulationState = () => {
  const {
    state: {
      mySimulations: { mySimulations, loading,execution }
    },
    dispatch
  } = useStore()

  const { getMySimulations,setActiveSimulation,deleteSimulation,getExecution } = useMySimulationActions(dispatch)
  const {
    filterSimulationName,
    filterModelType,
    filterParameterType,
    filterDateDay,
    filterDateMonth,
    filterDateYear
  } = useComparmentalMySimulationFilter()

  const [rows] = useState(mySimulations)
  const [rowsFiltered, setRowsFiltered] = useState(mySimulations)
  
  useEffect(() => {
    mySimulationsList()
  }, [])
  
  const mySimulationsList = () => {
    if (execution) { getMySimulations() }
  }


  const columns = [
    { field: 'Select', headerName: 'ID', width: 70 },  
    { field: 'Simulation Name', headerName: 'ID', width: 70 },
    { field: 'Model Type', headerName: 'ID', width: 70 },
    { field: 'Parameter Type', headerName: 'ID', width: 70 },
    { field: 'Data Src', headerName: 'ID', width: 70 },
    { field: 'Date', headerName: 'ID', width: 70 },
    { field: 'Status', headerName: 'ID', width: 70 },
    { field: 'Preview', headerName: 'ID', width: 70 },
  ]
  
  

  const filterForm = (object) => {
    console.log(object)
    let filtered = rows
    if(object.search !== ''){
      filtered = filtered.filter(x => filterSimulationName(x,object))
    }
    if(object.modelType !== '' ){
      filtered = filtered.filter(x => filterModelType(x,object))
    }
    if(object.parameterType !== ''){
      filtered = filtered.filter(x => filterParameterType(x,object))
    }
    if(object.day !== ''){
      filtered = filtered.filter(x => filterDateDay(x,object))
    }
    if(object.month !== ''){
      filtered = filtered.filter(x => filterDateMonth(x,object))
    }
    if(object.year !== ''){
      filtered = filtered.filter(x => filterDateYear(x,object))
    }
    setRowsFiltered(filtered)
  }

  const handleClickPreview = (row) =>{
    getExecution()
    setActiveSimulation(row)
  }
  const handleClickDelete = (rows) =>{
    rows.map((elem) => {
      deleteSimulation(elem)
    })
  }
  return {
    loading,
    rowsFiltered,
    setRowsFiltered,
    columns,
    filterForm,
    handleClickPreview,
    handleClickDelete
  }
}