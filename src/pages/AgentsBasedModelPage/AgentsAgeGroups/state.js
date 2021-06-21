import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsModelActions } from '@actions/agentsModelActions'
import { useEffect, useState } from 'react'
export const useAgentsAgeGroups = () => {
  const history = useHistory()
  const {
    state: {      
      agentsModel: {
        data
      }
    },
    dispatch
  } = useStore()

  const [ initialItems, setInitialItems ] = useState([
    {
      name: '',
      percentage: ''      
    }
  ])

  const { saveAgentsInformation } = useAgentsModelActions(dispatch)

  useEffect(()=>{
    console.log(':::::::agentsModel>',data)
    console.log('::::::::>initialItems',initialItems)
  },[data,initialItems])
  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups'
    })
  }

  const handleClickSaveAgentsModel =(information)=>{
    saveAgentsInformation(information)
  }

  return {
    redirectToMobilityGroupsPage,
    handleClickSaveAgentsModel,
    setInitialItems,
    initialItems
  }
    
  
}
