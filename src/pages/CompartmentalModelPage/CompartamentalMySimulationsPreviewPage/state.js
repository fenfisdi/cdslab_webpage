import { useEffect } from 'react'
import { useMySimulationActions } from '../../../actions/mySimulationsActions'
import { useStore } from '../../../store/storeContext'
const { convertCSVToArray } = require('convert-csv-to-array')

export const useCompartamentalMySimulationsPreviewState = () => {
  const {
    state: {
      mySimulations: { mySimulationSelected,mySimulationFiles,mySimulationFileSelected, loading,execution }
    },
    dispatch
  } = useStore()

  const { getMySimulationsFiles } = useMySimulationActions(dispatch)

  useEffect(() => {
    handleGetFiles()
  }, [])

  const handleGetFiles = () => {
    console.log(mySimulationSelected.identifier)
    if (execution) {getMySimulationsFiles(mySimulationSelected.identifier)}
  }

  const handleDownloadFile = (elem) => {
    const arrayofArrays = convertCSVToArray(elem.body, {
      header: false,
      separator: ',',
    })
    return arrayofArrays
  }

  return {
    loading,
    mySimulationFiles,
    handleDownloadFile,
    mySimulationFileSelected
  }
}