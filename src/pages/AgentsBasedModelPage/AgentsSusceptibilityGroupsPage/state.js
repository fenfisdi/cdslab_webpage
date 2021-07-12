import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsSusceptibilityGroupsActionsActions } from '@actions/agentsSusceptibilityGroupsActions'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentSusceptibilityGroups = ({modalSettings}) => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)
  
  const {
    state: {      
      agentsSusceptibilityGroups: {
        data,
        error
      }
    },
    dispatch
  } = useStore()

  const parseInformationSusceptibilityGroupsModel =(arraySusceptibility=[])=>{
    return arraySusceptibility.map((susceptibility)=>{
      return {
        name:susceptibility.name,
        distribution:susceptibility.distribution,
        state: 'CONFIGURED',
        identifier:susceptibility.identifier    
      }
    })

  }

  const checkSusceptibilityGroupsList = (susceptibilityGroupList)=>{
    const itemsConfigured =[]
    susceptibilityGroupList.forEach((item) => {       
      item.state == 'CONFIGURED' && item.name.trim().length>0 && itemsConfigured.push(true)            
    })      
    return itemsConfigured.length == susceptibilityGroupList.length 
  }
  
  const { 
    saveSusceptibilityGroupsItemAction,
    deleteSusceptibilityGroupsItemAction,
    saveSusceptibilityGroupsItemFile,
    getSusceptibilityGroupsInformation,
    updateSusceptibilityGroupsItemAction    
  } = useAgentsSusceptibilityGroupsActionsActions(dispatch)
  
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
    { title: 'Susceptibility group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)


  useEffect(()=>{
    console.log(items)
    if(items.length>0){
           
      setIsValid(checkSusceptibilityGroupsList(items)) 
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
      getSusceptibilityGroupsInformation(idConfiguration)
    }else if(data != null && data.length > 0 && !error){
      console.log('ARRAYR SusceptibilityGroups::::::::::::::::::::::>',data)      
      setItems(parseInformationSusceptibilityGroupsModel(data))
    }
  },[data,error,idConfiguration])
  

  const redirectToSusceptibilityGroupsPage = () => {
    history.push({
      pathname: 'agentsVulnerabilityGroupsPage',
      search: `?idConfiguration=${idConfiguration}`
    })
  }

  const handleClickSaveSusceptibilityGroups = () =>{        
    redirectToSusceptibilityGroupsPage()
  }

  const storeFile = (susceptibilityGroupResponse,file,idConfiguration)=>{
    const idSusceptibilityGroup = susceptibilityGroupResponse?.data?.data?.identifier
    const formData = new FormData()
    formData.append('file',file)
    saveSusceptibilityGroupsItemFile(idConfiguration,idSusceptibilityGroup,formData).then(()=>{ 
      getSusceptibilityGroupsInformation(idConfiguration)
    })
  }

  const saveSusceptibilityGroupItem =(susceptibilityGroup,file='',isFile=false)=>{
    
    if(susceptibilityGroup.identifier){
      
      updateSusceptibilityGroupsItemAction(idConfiguration,susceptibilityGroup.identifier,susceptibilityGroup).then((susceptibilityGroupResponse)=>{
        if(isFile){
          storeFile(susceptibilityGroupResponse,file,idConfiguration)
        }else{
          getSusceptibilityGroupsInformation(idConfiguration)       
        }        
      })

    } else{
      
      saveSusceptibilityGroupsItemAction(susceptibilityGroup,idConfiguration).then((susceptibilityGroupResponse)=>{      
        if(isFile){
          storeFile(susceptibilityGroupResponse,file,idConfiguration)
        }else{
          getSusceptibilityGroupsInformation(idConfiguration)
        }      
      })

    }    
  }

  const deleteSusceptibilityGroupItem =(susceptibilityGroup)=>{    
    const {identifier}=susceptibilityGroup || {}    
    deleteSusceptibilityGroupsItemAction(idConfiguration,identifier).then(()=>{      
      getSusceptibilityGroupsInformation(idConfiguration)      
    })
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveSusceptibilityGroups,
    isValid,
    saveSusceptibilityGroupItem,
    idConfiguration,
    deleteSusceptibilityGroupItem
  }
    
  
}
