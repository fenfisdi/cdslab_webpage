import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAgentsMobilityGroupsActions } from '@actions/agentsMobilityGroupsActions'
import { useStore } from '../../../store/storeContext'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'

export const useAgentsMobilityGroups = ({modalSettings,setModalSettings,showSnack, setShowSnack }) => {
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
      return shcemaInformationParseMobilityGroups(mobility)
    })

  }


  const parseInformationMobilityGroupsItem = (MobilityGroup={})=>{
    return shcemaInformationParseMobilityGroups(MobilityGroup)
  }


  const shcemaInformationParseMobilityGroups = (mobility)=>{
    return {
      name:mobility.name,
      distribution:mobility?.distribution!=undefined && mobility?.distribution!=null ? mobility.distribution: {
        'type': '',
        'kwargs': {}
      },
      state: !isEmpty(mobility.distribution)?'CONFIGURED':'SAVE',
      identifier:mobility.identifier    
    }
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
    if(items.length>0){           
      setIsValid(checkMobilityGroupsList(items)) 
    }
    if(!modalSettings.open && idConfiguration!='' && !isEmpty(modalSettings.item)){
      getMobilityGroupsInformation(idConfiguration)
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

  const saveMobilityGroupsItem =(mobilityGroup,file='',isFile=false)=>{    
    const idMobilityGroup = mobilityGroup?.identifier
    if(isFile){      
      const formData = new FormData()
      console.log(file)
      formData.append('file',file)
      updateMobilityGroupsItemAction(idConfiguration,idMobilityGroup,mobilityGroup).then(()=>{
        saveMobilityGroupsItemFile(idConfiguration,idMobilityGroup,formData).then(()=>{ 
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
      updateMobilityGroupsItemAction(idConfiguration,idMobilityGroup,mobilityGroup).then(()=>{
        setModalSettings({...modalSettings,open:false})
      })
    }    
  }

  const saveMobilityGroupItem =(mobilityGroup)=>{
    const schemaPost = {
      distribution:null,
      name:mobilityGroup.name
    }
    return new Promise((resolve) => {      
      saveMobilityGroupsItemAction(schemaPost,idConfiguration).then((mobilityGroupResponse)=>{        
        resolve({mobilityGroup:mobilityGroupResponse.data.data})           
      })
    })    
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
    schemaItems,    
    isValid,    
    idConfiguration,
    setItems,
    handleClickSaveMobilityGroups,
    saveMobilityGroupsItem,
    deleteMobilityGroupsItem,
    parseInformationMobilityGroupsItem,
    saveMobilityGroupItem
  }
  
}
