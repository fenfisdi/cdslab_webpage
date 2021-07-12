import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAgentsMobilityGroupsActions } from '@actions/agentsMobilityGroupsActions'
import { useStore } from '../../../store/storeContext'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentsMobilityGroups = ({modalSettings}) => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)
  
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
        distribution:mobility.distribution,
        state: 'CONFIGURED',
        identifier:mobility.identifier   
      }
    })

  }

  const checkMobilityGroupsList = (mobilityGroupsList)=>{
    const itemsConfigured =[]
    mobilityGroupsList.forEach((item) => {         
      item.state == 'CONFIGURED' && itemsConfigured.push(true)            
    })      
    return itemsConfigured.length == mobilityGroupsList.length 
  }
  
  const {  
    getMobilityGroupsInformation, 
    saveMobilityGroupsItemAction,
    deleteMobilityGroupsItemAction,
    saveMobilityGroupsItemFile,
    updateMobilityGroupsItemAction
  } = useAgentsMobilityGroupsActions(dispatch)
  
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
    { title: 'Mobility group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)


  useEffect(()=>{
    console.log(items)
    if(items.length>0){
           
      setIsValid(checkMobilityGroupsList(items)) 
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
      getMobilityGroupsInformation(idConfiguration)
    }else if(data != null && data.length > 0 && !error){
      console.log('ARRAYR MOBILITIYGROUPS::::::::::::::::::::::>',data)      
      setItems(parseInformationMobilityGroupsModel(data))
    }
  },[data,error,idConfiguration])
  

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: 'agentsSusceptibilityGroups',
      search: `?idConfiguration=${idConfiguration}`
    })
  }

  const handleClickSaveMobilityGroups =()=>{    
    redirectToSusceptibilityGroupsPage()  
  }

  const storeFile = (mobilityGroupResponse,file)=>{
    const idMobilityGroup = mobilityGroupResponse?.data?.data?.identifier
    const formData = new FormData()
    formData.append('file',file)
    saveMobilityGroupsItemFile(idConfiguration,idMobilityGroup,formData).then(()=>{ 
      getMobilityGroupsInformation(idConfiguration)
    })
  }

  const storeMobility = (isFile,mobilityGroupResponse,file)=>{
    if(isFile){
      storeFile(mobilityGroupResponse,file)
    }else{
      getMobilityGroupsInformation(idConfiguration)       
    }
  }

  const saveMobilityGroupsItem =(mobilityGroup,file='',isFile=false)=>{
    if(mobilityGroup.identifier){      
      
      updateMobilityGroupsItemAction(idConfiguration,mobilityGroup.identifier,mobilityGroup).then((mobilityGroupResponse)=>{       
        storeMobility(isFile,mobilityGroupResponse,file)
      })

    }else{

      saveMobilityGroupsItemAction(mobilityGroup,idConfiguration).then((mobilityGroupResponse)=>{      
        storeMobility(isFile,mobilityGroupResponse,file)      
      })

    }
    
  }

  const deleteMobilityGroupsItem =(mobilityGroup)=>{    
    const {identifier}=mobilityGroup || {}    
    deleteMobilityGroupsItemAction(idConfiguration,identifier).then(()=>{      
      getMobilityGroupsInformation(idConfiguration)      
    })
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveMobilityGroups,
    isValid,
    saveMobilityGroupsItem,
    idConfiguration,
    deleteMobilityGroupsItem
  }
  
}
