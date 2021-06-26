import React, { useEffect } from 'react'
import AgentsBaseContext from '../context/agentsBase.context'
import { useStore } from '../store/storeContext'
import { useDistributionActions } from '@actions/distributionAction'
import { isEmpty } from 'lodash'



const whitAgentsBaseHOC = (WrappedComponent) => {
  const agentsBaseHOC = ({
    ...props
  }) => {
    const {
      state: {
        distribution: { distributionList,error:errorDistributionList,parameterList }
      },
      dispatch
    } = useStore()
  
    const { 
      getListDistribution,
      getListParameters
    } = useDistributionActions(dispatch)
  
    useEffect(() => {
      if(distributionList.length == 0 && errorDistributionList == null  && isEmpty(parameterList)){
        getListDistribution()
      }else if(distributionList.length > 0 && errorDistributionList == null && isEmpty(parameterList)){
        distributionList.forEach(distribution => {          
          getListParameters(distribution)
        })
      }
    }, [distributionList,parameterList])
  

    return (
      <AgentsBaseContext.Provider
        value={{
          distributionList,
          parameterList          
        }}
      >
        <WrappedComponent {...props} />
      </AgentsBaseContext.Provider>
    )
    
  }

  return agentsBaseHOC
}

export default whitAgentsBaseHOC
