import { useEffect } from 'react'
import { useMySimulationActions } from '../../../actions/mySimulationsActions'
import { useStore } from '../../../store/storeContext'

export const useCompartamentalMySimulationsPreviewState = () => {
  const {
    state: {
      mySimulations: { 
        mySimulationSelected,
        mySimulationFiles,
        mySimulationFileSelected, 
        loading,
        execution 
      }
    },
    dispatch
  } = useStore()

  const { getMySimulationsFiles } = useMySimulationActions(dispatch)

  useEffect(() => {
    handleGetFiles()
  }, [])

  const handleGetFiles = () => {
    if (execution) {getMySimulationsFiles(mySimulationSelected.identifier)}
  }

  const handleDownloadImg = (body) => {
    const a = document.createElement('a')
    a.href = 'data:image/png;base64,' + body 
    a.download = 'Image.png'
    a.click()
  }

  return {
    loading,
    mySimulationFiles,
    handleDownloadImg,
    mySimulationFileSelected
  }
}