import React, { useEffect } from 'react'
import AgentsBaseContext from '../context/agentsBase.context'
import { useStore } from '../store/storeContext'
import { useDistributionActions } from '@actions/distributionAction'



export default WrappedComponent => {
  const agentsBaseHOC = ({
    ...props
  }) => {
    const {
      state: {
        distribution: { distributionList,error:errorDistributionList }
      },
      dispatch
    } = useStore()
  
    const { 
      getListDistribution,
    } = useDistributionActions(dispatch)
  
    useEffect(() => {
      if(distributionList.length == 0 && errorDistributionList == null){
        getListDistribution()
      }
    }, [distributionList])
  

    return (
      <AgentsBaseContext.Provider
        value={{
          distributionList           
        }}
      >
        <WrappedComponent {...props} />
      </AgentsBaseContext.Provider>
    )
  }

  return agentsBaseHOC
}
