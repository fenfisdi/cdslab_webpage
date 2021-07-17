import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsSusceptibilityGroupsActionsActions } from '@actions/agentsSusceptibilityGroupsActions'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentSusceptibilityGroups = ({modalSettings,setModalSettings,showSnack, setShowSnack}) => {
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
      return shcemaInformationParseSusceptibilityGroups(susceptibility)
    })

  }


  const parseInformationSusceptibilityGroupsItem = (susceptibilityGroup={})=>{
    return shcemaInformationParseSusceptibilityGroups(susceptibilityGroup)
  }


  const shcemaInformationParseSusceptibilityGroups = (susceptibility)=>{
    return {
      name:susceptibility.name,
      distribution:susceptibility.distribution? susceptibility.distribution: {
        'type': '',
        'kwargs': {}
      },
      state: !isEmpty(susceptibility.distribution)?'CONFIGURED':'SAVE',
      identifier:susceptibility.identifier    
    }
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
    if(items.length>0){           
      setIsValid(checkSusceptibilityGroupsList(items)) 
    }
    if(!modalSettings.open && idConfiguration!='' && !isEmpty(modalSettings.item)){
      getSusceptibilityGroupsInformation(idConfiguration)
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

  const saveSusceptibilityGroupsItem =(susceptibilityGroups,file='',isFile=false)=>{    
    const idSusceptibilityGroups = susceptibilityGroups?.identifier
    if(isFile){      
      const formData = new FormData()
      console.log(file)
      formData.append('file',file)
      updateSusceptibilityGroupsItemAction(idConfiguration,idSusceptibilityGroups,susceptibilityGroups).then(()=>{        
        saveSusceptibilityGroupsItemFile(idConfiguration,idSusceptibilityGroups,formData).then(()=>{ 
          setModalSettings({...modalSettings,open:false})
        }).catch(()=>{        
          setShowSnack(
            {
              ...showSnack,
              show: true,
              success: false,
              error: true,
              errorMessage: 'Error al subir el archivo, verifique que sea un archivo valido.!'
            }
          )
        })
      })
      
    }else{
      updateSusceptibilityGroupsItemAction(idConfiguration,idSusceptibilityGroups,susceptibilityGroups).then(()=>{
        setModalSettings({...modalSettings,open:false})
      })
    }    
  }

  const saveSusceptibilityGroupItem =(SusceptibilityGroups)=>{
    const schemaPost = {
      distribution:null,
      name:SusceptibilityGroups.name
    }
    return new Promise((resolve) => {      
      saveSusceptibilityGroupsItemAction(schemaPost,idConfiguration).then((susceptibilityGroupsResponse)=>{        
        resolve({susceptibilityGroup:susceptibilityGroupsResponse.data.data})           
      })
    })    
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
    schemaItems,    
    isValid,    
    idConfiguration,
    setItems,
    handleClickSaveSusceptibilityGroups,
    saveSusceptibilityGroupItem,
    saveSusceptibilityGroupsItem,
    deleteSusceptibilityGroupItem,
    parseInformationSusceptibilityGroupsItem
  }
    
  
}
