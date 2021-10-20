import { isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useConfigurationActions } from '../../../../actions/configurationActions'
import { useQuarantineActions } from '../../../../actions/quarantineGroupsActions'
import { useStore } from '../../../../store/storeContext'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import useFieldsCreation from './fieldsCreation'
import fieldsToQuarantineRestrictionModal from './tableFieldsCreations'

export  const useQuarantineRestrictionsPageState = ({modalSettings,setModalSettings}) => {
  const history = useHistory()
  const {   
    dispatch
  } = useStore()

  const { 
    getConfigurationAction,
    getListConfigurationTimeAction
  } = useConfigurationActions(dispatch)

  const {
    getQuarantineGroupsAction,
    getQuarantineInformationAction,
    putQuarantineInformationAction
  } = useQuarantineActions()

  const dataTimeWithoutRestrictionsModeSelect = [
    {label:'fixed',value:'fixed'},
    {label:'random',value:'random'}
  ]

  const [initialDate, setInitialDate] = useState(null)
  const [idConfiguration, setIdConfiguration] = useState('')
  const [quarantineGroups,setQuarantineGroups] = useState([])
  const [listConfigurationTime,setListConfigurationTime] = useState([])
  const [isValid,setValid] = useState(false)
  const [configuration,setConfiguration] = useState({})
  const [quarantineConfig,setQuarantineConfig] = useState({})
  const [updateInformationQuarantineGroups,setUpdateInformationQuarantineGroups] = useState([])

  const schemaCyclicRestrictions = {        
    'grace_time': '',
    'global_quarantine': 0,
    'global_quarantine_units': '',
    'restriction_mode': '',
    'time_without_restrictions': 0,
    'time_without_restrictions_units': '',
    'variables': {}
  }

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

  const fieldsToModal = fieldsToQuarantineRestrictionModal({
    restrictionsDelayInputModal,
    globalCuarantineTimeInput,
    restrictionsDelaySelectModal,
    restrictionsQuarantinelInputModal,
    restrictionsQuarantinelSelectModal,
    restrictionsUnrestrictedInputModal,
    restrictionsUnrestrictedSelectModal
  })


  const parseInformationuseQuarantineRestrictionsModel =(arrayQuarantineRestrictionsGroup=[])=>{
    return arrayQuarantineRestrictionsGroup.map((quarantineRestrictionsGroup)=>{
      return shcemaInformationParseQuarantineRestrictionsModel(quarantineRestrictionsGroup)
    })

  }

  const shcemaInformationParseQuarantineRestrictionsModel = (quarantineRestrictionsGroup)=>{
    return {
      identifier:quarantineRestrictionsGroup?.identifier,
      name: quarantineRestrictionsGroup?.name,
      quarantine: quarantineRestrictionsGroup?.quarantine,
      state:'', 
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
    }
  }


  useEffect(()=>{
    if(listConfigurationTime.length == 0){
      getListConfigurationTimeAction().then((response)=>{ 
        const dataList = []          
        for (const property in response.data.data) {
          dataList.push({value: response.data.data[property],label: response.data.data[property]})
        }    
        setListConfigurationTime([...dataList])
      })
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
        setQuarantineGroups([...parseInformationuseQuarantineRestrictionsModel(response.data.data)])
      })
    }
    if(isEmpty(quarantineConfig) && idConfiguration!=''){
      getQuarantineInformationAction(idConfiguration).then((response)=>{
        setQuarantineConfig({...response.data.data})
      })
    }
  },[configuration,idConfiguration,quarantineGroups,quarantineConfig])

  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])


  useEffect(()=>{
    const quarantineGroupsToSave = updateInformationQuarantineGroups.length>0 ? updateInformationQuarantineGroups:quarantineGroups
    let validationForm = false
    
    if(!isEmpty(fields)){
      if(globalCuarantineTimeInput.value=='' || globalCuarantineTimeSelect.value=='' || initialDate==null || timeWithoutRestrictionsModeSelect.value == '' ){
        validationForm = false
      }else if(timeWithoutRestrictionsModeSelect.value == 'fixed' && (timeWithoutRestrictionsInput.value == '' || timeWithoutRestrictionsSelect.value == '')) {
        validationForm = false
      }else{
        validationForm = true
      }
    }

    if(validationForm){     
      quarantineGroupsToSave.map((quarantineGroupToSave)=>{        
        const {groupInfo:{delay, quarantine, unrestricted},state} = quarantineGroupToSave
        if(
          state != 'CONFIGURED' || parseInt(delay.value) > parseInt(globalCuarantineTimeInput.value) || 
          parseInt(quarantine.value)>parseInt(globalCuarantineTimeInput.value) || 
          parseInt(unrestricted.value)>parseInt(globalCuarantineTimeInput.value)){
          validationForm = false
        }
      })
      setValid(validationForm)  
    }else{
      setValid(false)
    }

  },[fields,initialDate,quarantineGroups])

  useEffect(()=>{

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

  useEffect(()=>{
    if(!isEmpty(quarantineConfig) && quarantineConfig.cyclic_restrictions!=null && quarantineGroups.length>0 && updateInformationQuarantineGroups.length == 0){      
      const { cyclic_restrictions:{global_quarantine,global_quarantine_units,restriction_mode,grace_time,variables} = {} } = quarantineConfig || {}
      globalCuarantineTimeInput.onChange({target:{value:global_quarantine}})
      globalCuarantineTimeSelect.onChange({target:{value:global_quarantine_units}})
      timeWithoutRestrictionsModeSelect.onChange({target:{value:restriction_mode}})
      setInitialDate(grace_time)
      timeWithoutRestrictionsInput.onChange({target:{value:quarantineConfig.cyclic_restrictions?.time_without_restrictions}})
      timeWithoutRestrictionsSelect.onChange({target:{value:quarantineConfig.cyclic_restrictions?.time_without_restrictions_units}})    
      
      const newArray = Object.keys(variables).map(variableIdentifier => {
        let isFound = quarantineGroups.find((quarantineGroup)=> quarantineGroup.identifier == variableIdentifier)
        const cloneFound = Object.assign({}, isFound)
        if(!isEmpty(cloneFound)){
          cloneFound.groupInfo.delay.value = variables[variableIdentifier].delay
          cloneFound.groupInfo.delay.units = variables[variableIdentifier].delay_units
          cloneFound.groupInfo.quarantine.value = variables[variableIdentifier].length
          cloneFound.groupInfo.quarantine.units = variables[variableIdentifier].length_units
          cloneFound.groupInfo.unrestricted.value  = variables[variableIdentifier].unrestricted_time
          cloneFound.groupInfo.unrestricted.units  = variables[variableIdentifier].unrestricted_time_units
          cloneFound.state = 'CONFIGURED'
          return cloneFound
        }
        return {}
      })
     
      newArray.forEach(newElement=>{
        const pos = quarantineGroups.map((e)=> e.identifier ).indexOf(newElement.identifier)        
        quarantineGroups[pos] = newElement
      }) 

      setUpdateInformationQuarantineGroups(quarantineGroups)
            
    }
  },[quarantineConfig,quarantineGroups])

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
    
    delay.value = restrictionsDelayInputModal.value
    delay.units = restrictionsDelaySelectModal.value
    quarantine.value = restrictionsQuarantinelInputModal.value
    quarantine.units = restrictionsQuarantinelSelectModal.value
    unrestricted.value = restrictionsUnrestrictedInputModal.value
    unrestricted.units = restrictionsUnrestrictedSelectModal.value
    groupQuarantineUpdate.state = 'CONFIGURED'
    const pos = quarantineGroups.map((e)=> e.name ).indexOf(groupQuarantineUpdate.name)
    
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
  
  const checkProperties = (obj)=> {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != '')
        return false
    }
    return true
  }

  const convertArrayToObject = (array, key) => {
    const initialValue = {}
    return array.reduce((obj, item) => { 
      if(!checkProperties(item[item[key]])){
        return {
          ...obj,
          [item[key]]: {...item[item[key]]},
        }
      }else{
        return{
          ...obj,
        }
      }
      
    }, initialValue)
  }

  const schemaQuarantineGroups =(quarantineGroupsCurrent)=>{
    return quarantineGroupsCurrent.map((quarantineGroup)=>{
      const {delay, quarantine, unrestricted} = quarantineGroup.groupInfo      
      return {
        [quarantineGroup['identifier']]: {
          'delay': delay?.value,
          'delay_units': delay?.units,
          'length': quarantine?.value,
          'length_units': quarantine?.units,
          'unrestricted_time': unrestricted?.value,
          'unrestricted_time_units': unrestricted?.units
        },
        identifier:quarantineGroup['identifier']
      }
    })
  }

  const handlerSaveInformation =()=>{
    
    const quarantineGroupsToSave = updateInformationQuarantineGroups.length>0 ? updateInformationQuarantineGroups:quarantineGroups
    let newCycle = schemaCyclicRestrictions
    newCycle.grace_time = initialDate 
    newCycle.global_quarantine = globalCuarantineTimeInput.value
    newCycle.global_quarantine_units = globalCuarantineTimeSelect.value
    newCycle.restriction_mode = timeWithoutRestrictionsModeSelect.value
    newCycle.time_without_restrictions = timeWithoutRestrictionsInput.value!=''?timeWithoutRestrictionsInput.value:null
    newCycle.time_without_restrictions_units = timeWithoutRestrictionsSelect.value!=''?timeWithoutRestrictionsSelect.value:null
    const newVariables = schemaQuarantineGroups(quarantineGroupsToSave)
    newCycle.variables = convertArrayToObject(newVariables,'identifier')    
    putQuarantineInformationAction(idConfiguration,
      {...quarantineConfig,cyclic_restrictions:newCycle}).then(()=>{
      
      history.push({
        pathname: 'initialPopulationSetUpPage',
        search: `?idConfiguration=${idConfiguration}`
      }) 
    })
  }


  return {
    initialDate,
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput,
    listConfigurationTime,
    quarantineGroups:updateInformationQuarantineGroups.length>0?updateInformationQuarantineGroups:quarantineGroups,
    isValid,
    fieldsToModal,
    configuration,
    handlerSaveInformation,
    setInitialDate,
    handleDate,
    redirectToSusceptibilityGroupsPage,
    fieldsToQuarantineRestrictionModal,
    handleGroupQuarantineRestrictions
  }

}