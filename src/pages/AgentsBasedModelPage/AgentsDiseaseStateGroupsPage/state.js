import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsDiseaseStateGroupsActions } from '@actions/agentsDiseaseStateGroupsActions'
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
      }
    },
    dispatch
  } = useStore()

  const parseInformationDiseaseStateGroupsModel =(arrayDiseaseStateGroup=[])=>{
    return arrayDiseaseStateGroup.map((diseaseStateGroup)=>{
      return {
        name:diseaseStateGroup.name,
        distribution:diseaseStateGroup.distribution,
        state: 'CONFIGURED',
        identifier:diseaseStateGroup.identifier    
      }
    })

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
    saveDiseaseStateGroupsItemFile  
  } = useAgentsDiseaseStateGroupsActions(dispatch)
  
  const schemaItems={
    name: '',
    distribution: {
      'type':'',
      'kwargs': {}
    },     
    state: ''
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Disease group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)


  useEffect(()=>{
    console.log(items)
    if(items.length>0){
           
      setIsValid(checkDiseaseStateGroupsList(items)) 
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

  const saveDiseaseStateGroupsItem =(diseaseStateGroup,file='',isFile=false)=>{    
    saveDiseaseStateGroupsItemAction(diseaseStateGroup,idConfiguration).then((diseaseStateGroupResponse)=>{      
      if(isFile){
        const idDiseaseStateGroup = diseaseStateGroupResponse?.data?.data?.identifier
        const formData = new FormData()
        formData.append('file',file)
        saveDiseaseStateGroupsItemFile(idConfiguration,idDiseaseStateGroup,formData).then(()=>{ 
          getDiseaseStateGroupsInformation(idConfiguration)
        })
      }else{
        getDiseaseStateGroupsInformation(idConfiguration)
      }      
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
    deleteDiseaseStateGroupItem
  }
    
  
}
