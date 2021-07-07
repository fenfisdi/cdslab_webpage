import React, { useEffect, useState } from 'react'
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
        distribution: { distributionList,error:errorDistributionList }
      },
      dispatch
    } = useStore()
  
    const { 
      getListDistribution,
      getParametersOptions
    } = useDistributionActions(dispatch)

    const[parametersOptions,setParametersOptions]=useState({})
  
    useEffect(() => {
      if(distributionList.length == 0 && errorDistributionList == null && isEmpty(parametersOptions)){
        getListDistribution()
      }else if(distributionList.length >= 4 && errorDistributionList == null && isEmpty(parametersOptions)){
        getParametersOptions(distributionList).then((response)=>{          
          setParametersOptions(response)
        })                
      }
    }, [distributionList,errorDistributionList])
  

    return (
      <AgentsBaseContext.Provider
        value={{
          distributionList,
          parameterList:parametersOptions        
        }}
      >
        <WrappedComponent {...props} />
      </AgentsBaseContext.Provider>
    )
    
  }

  return agentsBaseHOC
}

export default whitAgentsBaseHOC
