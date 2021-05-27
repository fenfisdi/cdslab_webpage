import { useEffect } from 'react'
import { useMySimulationActions } from '../../../../actions/mySimulationsActions'
import { useStore } from '../../../../store/storeContext'
import fs from 'fs'

export const useMySimulationsPreviewState = () => {
  const {
    state: {
      mySimulations: { 
        mySimulationSelected,
        mySimulationFiles,
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

  const handleDownloadHtml = (body) => {
    body.then((data) => {
      const a = document.createElement('a')
      a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data) 
      a.download = 'index.html'
      a.click()
    })
  }
  const handleDownloadCsv = (body) => {
    body.then((data) => {
      const a = document.createElement('a')
      a.href = 'data:text/csv,' + data 
      a.download = 'archivo.csv'
      a.click()
    })
  }
  return {
    mySimulationFiles,
    mySimulationSelected,
    handleDownloadCsv,
    handleDownloadHtml
  }
}