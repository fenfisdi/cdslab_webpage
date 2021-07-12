import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsDiseaseStateGroupsActions } from '@actions/agentsDiseaseStateGroupsActions'
import { useConfigurationActions } from '@actions/configurationActions'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentsDiseaseStateGroups = ({modalSettings}) => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)
  
  const {
    state: {      
      agentsDiseaseStateGroups: {
        data,
        error
      },
      configuration: { listConfigurationDistance, error:errorListConfigurationDistance }
    },
    dispatch
  } = useStore()

  const parseInformationDiseaseStateGroupsModel =(arrayDiseaseStateGroup=[])=>{
    return arrayDiseaseStateGroup.map((diseaseStateGroup)=>{
      return shcemaInformationParseDiseaseState(diseaseStateGroup)
    })

  }

  const parseInformationDiseaseStateItem = (diseaseStateGroup={})=>{
    return shcemaInformationParseDiseaseState(diseaseStateGroup)
  }

  const shcemaInformationParseDiseaseState = (diseaseStateGroup)=>{
    return {
      name:diseaseStateGroup.name,
      distribution:diseaseStateGroup.distribution || {},
      state: !isEmpty(diseaseStateGroup.distribution)?'CONFIGURED':'SAVE',
      identifier:diseaseStateGroup.identifier    
    }
  }

  const checkDiseaseStateGroupsList = (diseaseStateGroupList)=>{
    const itemsConfigured =[]
    diseaseStateGroupList.forEach((item) => {       
      item.state == 'CONFIGURED' && item.name.trim().length>0 && itemsConfigured.push(true)            
    })      
    return itemsConfigured.length == diseaseStateGroupList.length 
  }
  
  const { 
    getDiseaseStateGroupsInformation,    
    saveDiseaseStateGroupsItemAction,
    deleteDiseaseStateGroupsItemAction,
    getDiseaseStateGroups     
  } = useAgentsDiseaseStateGroupsActions(dispatch)

  const { getListConfigurationDistance } = useConfigurationActions(dispatch)
  
  const schemaItems={
    'name': '',
    'can_infected': false,
    'is_infected': false,
    'can_spread': false,
    'spread_radius': 0,
    'spread_radius_unit': null,
    'spread_probability': 0,
    'distributions': {},
    'state':''
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Disease state name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)


  useEffect(()=>{
    console.log(items)
    console.log(modalSettings)
    if(items.length>0){           
      setIsValid(checkDiseaseStateGroupsList(items)) 
    }
    if(!modalSettings.open && idConfiguration!='' && !isEmpty(modalSettings.item)){
      getDiseaseStateGroupsInformation(idConfiguration)
    } 
  },[modalSettings,items])

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  useEffect(()=>{     
    if(data == null && !error && idConfiguration!=''){
      getDiseaseStateGroupsInformation(idConfiguration)
    }else if(data != null && data.length > 0 && !error){
      console.log('ARRAYR DiseaseStateGroups::::::::::::::::::::::>',data)      
      setItems(parseInformationDiseaseStateGroupsModel(data))
    }
  },[data,error,idConfiguration])

  useEffect(() => {    
    if (listConfigurationDistance.length == 0 && errorListConfigurationDistance == null) {       
      getListConfigurationDistance()
    }
  },[listConfigurationDistance])
  

  const redirectToNaturalHistoryPage = () => {
    console.log('redirect to:::::>HistoryNatulra')
    /*history.push({
      pathname: 'agentsVulnerabilityGroupsPage',
      search: `?idConfiguration=${idConfiguration}`
    })*/
  }

  const handleClickSaveDiseaseStateGroups = () =>{        
    redirectToNaturalHistoryPage()
  }

  const saveDiseaseStateGroupsItem = (diseaseStateGroup) => {
    return new Promise((resolve) => {      
      saveDiseaseStateGroupsItemAction(diseaseStateGroup,idConfiguration).then((diseaseStateGroupResponse)=>{        
        resolve({diseaseStateGroup:diseaseStateGroupResponse.data.data})           
      })
    })
    
  }

  const deleteDiseaseStateGroupItem =(diseaseStateGroup)=>{    
    const {identifier}=diseaseStateGroup || {}    
    deleteDiseaseStateGroupsItemAction(idConfiguration,identifier).then(()=>{      
      getDiseaseStateGroupsInformation(idConfiguration)      
    })
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveDiseaseStateGroups,
    isValid,
    saveDiseaseStateGroupsItem,
    idConfiguration,
    deleteDiseaseStateGroupItem,
    parseInformationDiseaseStateItem,
    getDiseaseStateGroups,
    listConfigurationDistance
  }
    
  
}
