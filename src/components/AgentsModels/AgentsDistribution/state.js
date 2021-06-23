import { useEffect } from 'react'
import { useDistributionActions } from '@actions/distributionAction'
import { useStore } from '../../../store/storeContext'

export const useAgentsDistributionState = () => {
  const {
    state: {
      distribution: { distributionList, loading,error }
    },
    dispatch
  } = useStore()

  const { 
    getListDistribution,
  } = useDistributionActions(dispatch)

  useEffect(() => {
    if(distributionList.length == 0 && error == null){
      getListDistribution()
    }
  }, [distributionList])
  

  return {
    loading,
    distributionList,
  }
}