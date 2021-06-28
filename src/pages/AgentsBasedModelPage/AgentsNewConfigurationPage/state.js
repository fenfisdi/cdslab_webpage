import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useConfigurationActions } from '../../../actions/configurationActions'
import { useStore } from '../../../store/storeContext'
import { useAgentsMobilityGroupsActions } from '@actions/agentsMobilityGroupsActions'
import { useAgentsAgeModelActions } from '@actions/agentsAgeModelActions'
export const useAgentsModelsPageState = ({ showSnack, setShowSnack }) => {

  const {
    state: {
      configuration: { data,listConfigurationDistance,listConfigurationTime, loading,error },
      agentsMobilityGroupsModel: {  data:agentsMobilityList },
      agentsAgeModel: { data:agentsAgeModelList }
    },
    dispatch
  } = useStore()
  const history = useHistory()
  const { 
    getListConfigurationDistance,
    getListConfigurationTime,
    addConfiguration,
  } = useConfigurationActions(dispatch)

  const { setResetMobilityGroupsInformation } = useAgentsMobilityGroupsActions(dispatch)
  const { setAgeModelInformation } = useAgentsAgeModelActions(dispatch)

  useEffect(()=>{
    if(agentsMobilityList.length>0){
      setResetMobilityGroupsInformation()
    }
    if(agentsAgeModelList.length>0){
      setAgeModelInformation()
    }
  },[agentsMobilityList,agentsAgeModelList])

  useEffect(() => {    
    if (listConfigurationDistance.length == 0 && error == null) { 
      getListConfigurationDistance()
    }
    if (listConfigurationTime.length == 0 && error == null) { 
      getListConfigurationTime()
    }
  }, [listConfigurationDistance])

  useEffect(() => {
    if (!isEmpty(data)) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          successMessage: 'create configuration successfully.',
          error: false
        }
      )
      history.push({
        pathname: 'agentsAgeGroups',
        search: `?idConfiguration=${data.identifier}`
      })
    } 
  }, [data])

  useEffect(() => {
    if (error != null) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: 'error create configuration'
        }
      )
    }
  }, [error])

  const eventEmitter = (formValues) => {
    addConfiguration(formValues)
  }


  return {
    listConfigurationDistance,
    listConfigurationTime,
    eventEmitter,
    loading
  }
}