import { find, isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useConfigurationActions } from '../../../../actions/configurationActions'
import { useQuarantineActions } from '../../../../actions/quarantineGroupsActions'
import { useStore } from '../../../../store/storeContext'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import useFieldsCreation from './fieldsCreation'

export  const useQuarantineRestrictionsPageState = ({modalSettings,setModalSettings}) => {
  const history = useHistory()
  const {
    state: {
      configuration: { listConfigurationTime, error }
    },
    dispatch
  } = useStore()

  const { 
    getConfigurationAction,
    getListConfigurationTime
  } = useConfigurationActions(dispatch)

  const {
    getQuarantineGroupsAction
  } = useQuarantineActions()

  const dataTimeWithoutRestrictionsModeSelect = [
    {label:'fixed',value:'fixed'},
    {label:'random',value:'random'}
  ]

  const [initialDate, setInitialDate] = useState(null)
  const [idConfiguration, setIdConfiguration] = useState('')
  const [quarantineGroups,setQuarantineGroups] = useState([
    {
      name:'Quarantine group 1', 
      state:'CONFIGURED', 
      groupInfo:{
        delay:{
          value:'',
          units:''
        },
        quarantine:{
          value:'',
          units:''
        },
        unrestricted:{
          value:'',
          units:''
        }
      }
    },
    {
      name:'Quarantine group 2',
      groupInfo:{
        delay:{
          value:'',
          units:''
        },
        quarantine:{
          value:'',
          units:''
        },
        unrestricted:{
          value:'',
          units:''
        }
      }}
  ])
  const [isValid,setValid] = useState(false)
  const [configuration,setConfiguration] = useState({})
 
  const fields = useFieldsCreation({
    dataGlobalCuarantineTimeSelect:listConfigurationTime,
    dataTimeWithoutRestrictionsModeSelect,
    dataTimeWithoutRestrictionsSelect:listConfigurationTime
  })

  const {
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput,
    restrictionsDelayInputModal,
    restrictionsDelaySelectModal,
    restrictionsQuarantinelInputModal,
    restrictionsQuarantinelSelectModal,
    restrictionsUnrestrictedInputModal,
    restrictionsUnrestrictedSelectModal
  } = fields

  useEffect(()=>{
    if(listConfigurationTime && listConfigurationTime.length == 0 && error == null){
      getListConfigurationTime()
    }
  },[listConfigurationTime])


  useEffect(()=>{
    if (isEmpty(configuration) && idConfiguration!=''){
      getConfigurationAction(idConfiguration).then((response)=>{
        setConfiguration({...response.data.data})
      })
    }
    if(quarantineGroups.length == 0 && idConfiguration!=''){
      getQuarantineGroupsAction(idConfiguration).then((response)=>{
        setQuarantineGroups([...response.data.data])
      })
    }
  },[configuration,idConfiguration])


  useEffect(()=>{
    if(quarantineGroups && quarantineGroups.length>0){
      console.log('quarantineGroups:::::>',quarantineGroups)
      const isConfigured = find(quarantineGroups,(o) => { return o.state == 'CONFIGURED' })
      !isEmpty(isConfigured) && setValid(true)
      isEmpty(isConfigured) && setValid(false)
    }
  },[quarantineGroups])
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])


  useEffect(()=>{
    console.log('fields',fields)
    console.log('initialDate',initialDate)
  },[fields,initialDate])

  useEffect(()=>{
    console.log('modalsetting:::>',modalSettings)
    if(modalSettings.open && !isEmpty(modalSettings.item)) {       
      const groupQuarantineUpdate = modalSettings.item
      const { groupInfo:{delay,quarantine,unrestricted}={} } = groupQuarantineUpdate
      restrictionsDelayInputModal.onChange({target:{value:delay.value}})
      restrictionsDelaySelectModal.onChange({target:{value:delay.units}})
      restrictionsQuarantinelInputModal.onChange({target:{value:quarantine.value}})
      restrictionsQuarantinelSelectModal.onChange({target:{value:quarantine.units}})
      restrictionsUnrestrictedInputModal.onChange({target:{value:unrestricted.value}})
      restrictionsUnrestrictedSelectModal.onChange({target:{value:unrestricted.units}})  
    }else if(!modalSettings.open && !isEmpty(modalSettings.item)){
      const newModalSettings = {...modalSettings,item:{},open:false}
      cleanModalFields()
      setModalSettings({...newModalSettings})
    }
  },[modalSettings])

  const handleDate = (dateValue) => {
    setInitialDate(dateValue)
  }

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: '',
      search: `?idConfiguration=${idConfiguration}`
    })
  }
  

  const handleGroupQuarantineRestrictions =()=>{
    const groupQuarantineUpdate = modalSettings.item
    const { groupInfo:{delay,quarantine,unrestricted}={} } = groupQuarantineUpdate
    
    delay.value = restrictionsDelayInputModal.value,
    delay.units = restrictionsDelaySelectModal.value,
    quarantine.value = restrictionsQuarantinelInputModal.value,
    quarantine.units = restrictionsQuarantinelSelectModal.value,
    unrestricted.value = restrictionsUnrestrictedInputModal.value,
    unrestricted.units = restrictionsUnrestrictedSelectModal.value
    groupQuarantineUpdate.state = 'CONFIGURED'
    const pos = quarantineGroups.map((e)=> e.name ).indexOf(groupQuarantineUpdate.name)
    //const schemaParse = parseInformationDiseaseStateItem(diseaseCurrent)
    quarantineGroups[pos] = groupQuarantineUpdate 
    setQuarantineGroups([...quarantineGroups]) 
    const newModalSettings = {...modalSettings,item:{},open:false}
    cleanModalFields()
    setModalSettings({...newModalSettings})

  }

  const cleanModalFields =()=>{
    restrictionsDelayInputModal.onChange({target:{value:''}})
    restrictionsDelaySelectModal.onChange({target:{value:''}})
    restrictionsQuarantinelInputModal.onChange({target:{value:''}})
    restrictionsQuarantinelSelectModal.onChange({target:{value:''}})
    restrictionsUnrestrictedInputModal.onChange({target:{value:''}})
    restrictionsUnrestrictedSelectModal.onChange({target:{value:''}})    
  }

  const fieldsToQuarantineRestrictionModal = () =>{
    return{
      headers:[
        {label:'Parameter',attr:'parameter'},
        {label:'Value',attr:'type'},
        {label:'Units',attr:'units'}
      ],
      body:[
        {
          parameter:{
            label:'Delay',
            name:'delay'
          },
          type:{      
            name:'type',
            label:'',
            type:'input',
            props:{
              disabled:false,
              required:true,
              fullWidth:false,
              variant:'outlined',            
              styles:{'padding':'0px'},
              ...restrictionsDelayInputModal              
            },
            validators:[
              {
                name:'minValue',
                value:globalCuarantineTimeInput.value,
                check(valueCompare){
                  return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
                },
                message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
              }
            ],            
          },         
          units:{            
            name:'distanceunits',
            type:'select',
            label:'time units',            
            props:{              
              title:'time units',
              options:[{label:'prueba',value:'prueba'}],
              ...restrictionsDelaySelectModal
            } 
          }
        },
        {
          parameter:{
            label:'Quarantine length',
            name:'quarantinelength'
          },
          type:{      
            name:'type',
            label:'',
            type:'input',
            props:{
              disabled:false,
              required:true,
              fullWidth:false,
              variant:'outlined',            
              styles:{'padding':'0px'},
              ...restrictionsQuarantinelInputModal           
            },
            validators:[
              {
                name:'minValue',
                value:globalCuarantineTimeInput.value,
                check(valueCompare){
                  return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
                },
                message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
              }
            ]            
          },         
          units:{            
            name:'distanceunits',
            type:'select',
            label:'time units',            
            props:{              
              title:'time units',
              options:[{label:'prueba',value:'prueba'}],
              ...restrictionsQuarantinelSelectModal
            } 
          }
        },
        {
          parameter:{
            label:'Unrestricted time',
            name:'unrestrictedtime'
          },
          type:{      
            name:'type',
            label:'',
            type:'input',
            props:{
              disabled:false,
              required:true,
              fullWidth:false,
              variant:'outlined',            
              styles:{'padding':'0px'},
              ...restrictionsUnrestrictedInputModal              
            },
            validators:[
              {
                name:'minValue',
                value:globalCuarantineTimeInput.value,
                check(valueCompare){
                  return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
                },
                message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
              }
            ]            
          },         
          units:{            
            name:'distanceunits',
            type:'select',
            label:'time units',            
            props:{              
              title:'time units',
              options:[{label:'prueba',value:'prueba'}],
              ...restrictionsUnrestrictedSelectModal
            } 
          }
        }             
      ]
    }
  }

  return {
    initialDate,
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput,
    listConfigurationTime,
    quarantineGroups,
    isValid,
    setInitialDate,
    handleDate,
    redirectToSusceptibilityGroupsPage,
    fieldsToQuarantineRestrictionModal,
    handleGroupQuarantineRestrictions
  }

}