import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { useAgentsDiseaseStateGroupsActions } from '@actions/agentsDiseaseStateGroupsActions'
import { useConfigurationActions } from '@actions/configurationActions'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'
import useFieldsCreation from './fieldsCreation'
import { OPTIONS_MODAL } from '../../../constants/agents'

export const useAgentsDiseaseStateGroups = ({modalSettings,setModalSettings,showSnack, setShowSnack,setComponentChildren, componentChildren}) => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')
  const [isValid, setIsValid] = useState(false)
  const modalsFields = useFieldsCreation()
  const{
    spreadRadius,
    canGetinfected,
    isInfected,
    canSpread,
    distanceUnits,
    spreadProbability
  } = modalsFields

  const {
    state: {      
      agentsDiseaseStateGroups: { data, error },
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
    getDiseaseStateGroups,
    saveDiseaseStateGroupsItemFile,
    updateDiseaseStateGroupsItemAction   
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

  const updateDiseaseStateGroupsItem =(diseaseStateGroups,file='',isFile=false)=>{    
    const idDiseaseStateGroups = diseaseStateGroups?.identifier
    if(isFile){      
      const formData = new FormData()
      console.log(file)
      formData.append('file',file)
      updateDiseaseStateGroupsItemAction(idConfiguration,idDiseaseStateGroups,diseaseStateGroups).then(()=>{        
        saveDiseaseStateGroupsItemFile(idConfiguration,idDiseaseStateGroups,formData).then(()=>{ 
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
      updateDiseaseStateGroupsItemAction(idConfiguration,idDiseaseStateGroups,diseaseStateGroups).then(()=>{
        setModalSettings({...modalSettings,open:false})
      })
    }    
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

  const fieldsToDiseaseModal = () =>{
    return{
      headers:[
        {label:'Parameter',attr:'paramater'},
        {label:'Value',attr:'type'},
        {label:'',attr:'extra'}
      ],
      body:[
        {
          paramater:'Can get infected?',
          type:'switch',
          props:{
            ...canGetinfected,
            handleChange:canGetinfected.onChange                               
          }
        },
        {
          paramater:'Is infected?',
          type:'switch',
          props:{
            ...isInfected,
            handleChange:isInfected.onChange
          }
        },
        {          
          paramater:'Can spread?',
          type:'switch',
          name:'canspread',
          props:{
            canSpread,
            handleChange:canSpread.onChange            
          }
        },
        {
          paramater:'Spread radius',
          type:'input',
          showOption:{
            dependence:'canspread'
          },
          props:{
            ...spreadRadius,
            disabled:false,
            required:true,
            fullWidth:false,
            variant:'outlined',            
            styles:{'padding':'0px'}
          },
          extra:{          
            paramater:'distance units',
            type:'select',
            label:'distance units',            
            props:{
              ...distanceUnits,
              title:'distance units',
              options:listConfigurationDistance
            }            
          },
        },
        {
          paramater:'Spread probability',
          type:'slider',
          showOption:{
            dependence:'canspread'
          },
          props:{
            ...spreadProbability,
            name:'Spread probability',
            min: 0, 
            max: 1, 
            step: 0.001, 
            initialValue:0,
            styles:{
              range:{
                width:'30%'
              },
              input:{
                width:'10%'
              },
            }                                
          },
        }
      ]
    }
  }
  
  return {
    tableColumns,
    items, 
    getDiseaseStateGroups,
    listConfigurationDistance,
    schemaItems,
    isValid,
    idConfiguration,
    setItems,
    handleClickSaveDiseaseStateGroups,
    saveDiseaseStateGroupsItem,
    updateDiseaseStateGroupsItem,
    deleteDiseaseStateGroupItem,
    parseInformationDiseaseStateItem,
    fieldsToDiseaseModal
  }
    
  
}
