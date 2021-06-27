import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAgentsMobilityGroupsActions } from '@actions/agentsMobilityGroupsActions'
import { useStore } from '../../../store/storeContext'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentsMobilityGroups = () => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')

  const {
    state: {      
      agentsMobilityGroupsModel: {
        data,
        error
      }
    },
    dispatch
  } = useStore()

  const parseInformationMobilityGroupsModel =(arrayMobility=[])=>{
    return arrayMobility.map((mobility)=>{
      return {
        name:mobility.name,
        distribution:mobility.distribution        
      }
    })

  }
  
  const { saveMobilityGroupsInformation, getMobilityGroupsInformation } = useAgentsMobilityGroupsActions(dispatch)
  
  const schemaItems={
    name: '',
    distribution: {
      'name':'',
      'distribution_type':'',
      'distribution_name':'',
      'distribution_filename':'',
      'distribution_extra_arguments': {}
    },      
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Mobility group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)

  
  useEffect(()=>{
    console.log(items)
  },[items])

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  useEffect(()=>{     
    if(data.length == 0 && !error && idConfiguration!=''){
      getMobilityGroupsInformation(idConfiguration)
    }else if(data.length > 0 && !error){
      console.log('ARRAYR MOBILITIYGROUPS::::::::::::::::::::::>',data)
      setItems(parseInformationMobilityGroupsModel(data))
    }
  },[data,error,idConfiguration])
  

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: 'agentSusceptibilityGroups'
    })
  }

  const handleClickSaveMobilityGroups =(information)=>{    
    saveMobilityGroupsInformation(information,idConfiguration).then(()=>{      
      getMobilityGroupsInformation(idConfiguration)
      redirectToSusceptibilityGroupsPage()
    })
    
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveMobilityGroups
  }
  
}
