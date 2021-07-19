import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../../store/storeContext'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { useAgentsVulnerabilityGroupsActions } from '@actions/agentsVulnerabilityGroupsActions'

export const useAgentsNaturalHistoryPageState = ()=>{

  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)

  const {
    state: {
      agentsVulnerabilityGroups: {
        data,
        error
      }
    },
    dispatch
  } = useStore()

  const { 
    saveVulnerabilityGroupsInformation, 
    getVulnerabilityGroupsInformation 
  } = useAgentsVulnerabilityGroupsActions(dispatch)

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  useEffect(()=>{     
    if(data == null && !error && idConfiguration!=''){
      getVulnerabilityGroupsInformation(idConfiguration)
      console.log(data) 
    }else if(data != null && data.length > 0 && !error){
      console.log('ARRAYR VulnerabilityGroups::::::::::::::::::::::>',data)      
      /* setItems(parseInformationVulnerabilityGroupsModel(data)) */
    }
  },[data,error,idConfiguration])

  return{
    data
  }
}