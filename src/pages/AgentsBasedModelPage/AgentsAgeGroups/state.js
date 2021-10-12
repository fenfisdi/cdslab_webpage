import { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsAgeModelActions } from '@actions/agentsAgeModelActions'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'
export const useAgentsAgeGroups = () => {

  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [counterPopulation, setCounterPopulation] = useState(false)
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

  const checkAgesGroupsList = (agesGroupsList)=>{
    const itemsConfigured =[]
    agesGroupsList.forEach((item) => {       
      item.name.trim().length>0 && itemsConfigured.push(true)            
    })      
    return itemsConfigured.length == agesGroupsList.length 
  }

  const checkCounterPopulationList = (agesGroupsList)=>{    
    let counter = 0
    
    agesGroupsList.forEach((item) => {      
      counter = counter + item.population_percentage       
    })
    return counter <= 1    
  }

  useEffect(()=>{    
    if(items.length>0){           
      setIsValid(checkAgesGroupsList(items)) 
    }
  },[items])

  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)

    }
  },[history])

 
  
  useEffect(()=>{     
    if(data == null && !error && idConfiguration!=''){      
      getAgentsAgeModelInformation(idConfiguration)
    }else if(data != null && data.length > 0 && !error){
      setItems(parseInformationAgeModel(data))
    }
  },[data,error,idConfiguration])

  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups',
      search: `?idConfiguration=${idConfiguration}`
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
    const isValidPopulation = checkCounterPopulationList(information) 
    
    if(!isValidPopulation){
      setCounterPopulation(true)
    }else{
      saveAgentsAgeModelInformation(information,idConfiguration).then(()=>{      
        getAgentsAgeModelInformation(idConfiguration)
        redirectToMobilityGroupsPage()
      })
    }
  }

  return {
    isValid,
    items,
    counterPopulation,    
    openSettings,    
    currentIndex,
    tableColumns,
    setCounterPopulation,
    setOpenSettings,
    handleCloseSettings,
    setItems,
    handleSettings,
    redirectToMobilityGroupsPage,
    handleClickSaveAgentsAgeModel,
    
  }
    
  
}
