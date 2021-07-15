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
  const [diseaseStateGroupsDistributions,setDiseaseStateGroupsDistributions] = useState({})
  const [configDistributtions,setConfigDistributtions] = useState({})
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
      'identifier': diseaseStateGroup.identifier,
      'name': diseaseStateGroup.name,
      'can_infected': diseaseStateGroup.can_infected,
      'is_infected': diseaseStateGroup.is_infected,
      'can_spread': diseaseStateGroup.can_spread,
      'spread_radius': diseaseStateGroup.spread_radius,
      'spread_radius_unit': diseaseStateGroup.spread_radius_unit,
      'spread_probability': diseaseStateGroup.spread_probability,
      distribution:{},
      distributions:diseaseStateGroup.distributions || {},
      state: !isEmpty(diseaseStateGroup.distributions) && Object.keys(diseaseStateGroup.distributions).length == 4?'CONFIGURED':'SAVE',
         
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
    updateDiseaseStateGroupsItemAction,
    getDiseaseStateGroupsDistributions  
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
    if(modalSettings.open && idConfiguration!='') { 
      console.log('items:::::::::::::::>',items)
      console.log('modalSettings::::::::::::::>',modalSettings)
      canGetinfected.onChange({target:{checked:modalSettings.item.can_infected}})
      spreadRadius.onChange({target:{value:modalSettings.item.spread_radius!=null?modalSettings.item.spread_radius:0}})
      isInfected.onChange({target:{checked:modalSettings.item.is_infected}})
      canSpread.onChange({target:{checked:modalSettings.item.can_spread}}) 
      distanceUnits.onChange({target:{value:modalSettings.item.spread_radius_unit!=null? modalSettings.item.spread_radius_unit:''}})
      spreadProbability.onChange({slider:{value:modalSettings.item.spread_probability}})   
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
    if(isEmpty(diseaseStateGroupsDistributions)){
      getDiseaseStateGroupsDistributions().then((diseaseStateGroupsDistributionsResponse)=>{
        const {data}=diseaseStateGroupsDistributionsResponse.data
        setDiseaseStateGroupsDistributions(data)
      })
    }
  },[listConfigurationDistance,diseaseStateGroupsDistributions])
  
  useEffect(()=>{
    console.log('modalsFields:::::::::::::>',modalsFields)   
  },[modalsFields])

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
    console.log('diseaseStateGroups::::::::::::::>',diseaseStateGroups)
    console.log('configDistributtions::::::::::::::::::::>',configDistributtions)
    const { diseaseState } = configDistributtions
    const schemaUpdate = {
      'identifier': diseaseStateGroups.identifier,
      'name': diseaseStateGroups.name,
      'can_infected': canGetinfected.value,
      'is_infected': isInfected.value,
      'can_spread': canSpread.value,
      'spread_radius': spreadRadius.value!=''?spreadRadius.value:null,
      'spread_radius_unit': distanceUnits.value!='' ? distanceUnits.value: null,
      'spread_probability': spreadProbability.value,
      'distributions': {
        ...diseaseStateGroups.distributions,
        [diseaseState['name']]: {
          ...diseaseStateGroups.distribution
        }        
      }
    }
    console.log('schemaUpdate::::::::::>',schemaUpdate)
    console.log('items:::::::::::::>',items)
    const pos = items.map(function(e) { return e.identifier }).indexOf(schemaUpdate.identifier)
    console.log('pos:::>',pos)
    const schemaParse = parseInformationDiseaseStateItem(schemaUpdate)
    items[pos] = schemaParse 
    setItems([...items])
    setComponentChildren(OPTIONS_MODAL.DISEASESTATE)
    setModalSettings({...modalSettings,item:schemaParse})
    /* updateDiseaseStateGroupsItemAction(idConfiguration,diseaseStateGroups.identifier,schemaUpdate).then((diseaseStateGroupItemResponse)=>{
      console.log('diseaseStateGroupItemResponse::::>',diseaseStateGroupItemResponse)
      setModalSettings({...modalSettings, item:diseaseStateGroupItemResponse.data.data})
      setComponentChildren(OPTIONS_MODAL.DISEASESTATE)
    }) */
    
    /*const idDiseaseStateGroups = diseaseStateGroups?.identifier
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
    }*/    
  }

  const handleDiseaseItem = ({cardSchema}) =>{
    setConfigDistributtions({
      diseaseState:cardSchema,
    })
    /* console.log('modalSettings:::>',modalSettings)
    console.log('cardSchema:::>',cardSchema)
    console.log('itemConfiguration::>',itemConfiguration)
    const schemaDistribution = {}
    schemaDistribution[cardSchema.name]={
      'type': '',
      'kwargs': {}
    }
    console.log('schemaDistribution::::>',schemaDistribution) */
    setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
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
            ...canSpread,
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
    diseaseStateGroupsDistributions,
    setItems,
    handleDiseaseItem,
    handleClickSaveDiseaseStateGroups,
    saveDiseaseStateGroupsItem,
    updateDiseaseStateGroupsItem,
    deleteDiseaseStateGroupItem,
    parseInformationDiseaseStateItem,
    fieldsToDiseaseModal
  }
    
  
}
