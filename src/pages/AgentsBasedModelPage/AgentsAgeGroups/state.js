import { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsAgeModelActions } from '@actions/agentsAgeModelActions'
export const useAgentsAgeGroups = () => {

  const history = useHistory()

  const initialItems = [
    {
      name: '',
      population_percentage: ''
    }
  ]
  const tableColumns = [
    { title: 'Age group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
    { title: '% of population', att: 'population_percentage',type: 'slider',  inputProps: { min: 0, max: 1, step: 0.001, initialValue:0 }  }
  ]
  const [items, setItems] = useState(initialItems)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)
  const {
    state: {      
      agentsAgeModel: {
        data,
        error
      }
    },
    dispatch
  } = useStore()
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
      setItems(parseInformationAgeModel(data))
    }
  },[data])

  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups'
    })
  }

  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }

  const handleCloseSettings = (item) => {    
    const itemsCopy = [...items]
    const state = item?.state
    itemsCopy[currentIndex] = { ...itemsCopy[currentIndex], state: state }
    setItems(itemsCopy)
    setOpenSettings(false)

  }
  
  const handleClickSaveAgentsAgeModel =(information)=>{    
    saveAgentsAgeModelInformation(information,'94257c90-d396-11eb-a821-02420a000520').then(()=>{      
      getAgentsAgeModelInformation('94257c90-d396-11eb-a821-02420a000520')
      redirectToMobilityGroupsPage()
    })
    
  }

  return {
    redirectToMobilityGroupsPage,
    items,
    setItems,
    handleSettings,
    openSettings,
    setOpenSettings,
    handleCloseSettings,
    currentIndex,
    tableColumns,
    handleClickSaveAgentsAgeModel,
  }
    
  
}
