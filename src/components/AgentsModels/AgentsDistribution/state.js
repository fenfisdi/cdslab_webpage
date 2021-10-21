import { useStore } from '../../../store/storeContext'

export const useAgentsDistributionState = () => {
  const {
    state: {
      distribution: { distributionList }
    }
  } = useStore()

  return {
    distributionList
  }
}