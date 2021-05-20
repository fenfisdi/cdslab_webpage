import { useEffect } from 'react'
import { useMySimulationActions } from '../../../actions/mySimulationsActions'
import { useStore } from '../../../store/storeContext'


export const useCompartamentalMySimulationsPreviewState = () => {
  const {
    state: {
      mySimulations: { mySimulationSelected,mySimulationFiles, loading,execution }
    },
    dispatch
  } = useStore()

  const { getMySimulationsFiles,getMySimulationsDownloadFiles } = useMySimulationActions(dispatch)

  useEffect(() => {
    handleGetFiles()
  }, [])

  const handleGetFiles = () => {
    console.log(mySimulationSelected.identifier)
    if (execution) {getMySimulationsFiles(mySimulationSelected.identifier)}
  }

  const handleDownloadFile = (elem) => {
    getMySimulationsDownloadFiles(mySimulationSelected.identifier, elem.uuid)
  }

  return {
    loading,
    mySimulationFiles,
    handleDownloadFile
  }
}