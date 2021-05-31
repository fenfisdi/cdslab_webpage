import { useStore } from '../../../store/storeContext'

export const useCompartamentalMySimulationsPreviewState = () => {
  const {
    state: {
      mySimulations: { 
        mySimulationFileSelected, 
        loading,
      }
    },
  } = useStore()

  return {
    loading,
    mySimulationFileSelected
  }
}