import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsAgeModelActions } from '@actions/agentsAgeModelActions'
import { useEffect, useState } from 'react'
export const useAgentsAgeGroups = () => {
  const history = useHistory()
  const {
    state: {      
      agentsAgeModel: {
        data,
        error
      }
    },
    dispatch
  } = useStore()

  const [ initialItems, setInitialItems ] = useState([
    {
      name: '',
      population_percentage: 0    
    }
  ])
  const { saveAgentsAgeModelInformation, getAgentsAgeModelInformation } = useAgentsAgeModelActions(dispatch)

  const parseInformationAgeModel =(arrayAges=[])=>{
    return arrayAges.map((age)=>{
      return {
        name:age.name,
        population_percentage:age.population_percentage
      }
    })

  }
  
  useEffect(()=>{ 
    if(data.length == 0 && !error){
      getAgentsAgeModelInformation('94257c90-d396-11eb-a821-02420a000520')
    }else if(data.length > 0 && !error){
      setInitialItems(parseInformationAgeModel(data))
    }
  },[data])
  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups'
    })
  }

  const handleClickSaveAgentsAgeModel =(information)=>{    
    saveAgentsAgeModelInformation(information,'94257c90-d396-11eb-a821-02420a000520').then(()=>{      
      getAgentsAgeModelInformation('94257c90-d396-11eb-a821-02420a000520')
    })
    
  }

  return {
    redirectToMobilityGroupsPage,
    handleClickSaveAgentsAgeModel,
    setInitialItems,
    initialItems
  }
    
  
}
