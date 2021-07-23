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
    getListConfigurationTimeAction,
    getQuarantineInformationAction
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
  const [quarantineGroups,setQuarantineGroups] = useState([])
  const [listConfigurationTime,setListConfigurationTime] = useState([])
  const [isValid,setValid] = useState(false)
  const [configuration,setConfiguration] = useState({})
  const [quarantineConfig,setQuarantineConfig] = useState({})

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
    let validationForm = false
    if(!isEmpty(fields)){
      if(globalCuarantineTimeInput.value=='' || globalCuarantineTimeSelect.value=='' || initialDate==null || timeWithoutRestrictionsModeSelect.value == '' ){
        validationForm =false
      }else if(timeWithoutRestrictionsModeSelect.value == 'fixed' && (timeWithoutRestrictionsInput.value == '' || timeWithoutRestrictionsSelect.value == '')) {
        validationForm =false
      }else{
        validationForm = true
      }
    }
    if(validationForm){
      const isFound = quarantineGroups.find((quarantineGroup)=>quarantineGroup.state == 'CONFIGURED')
      if(isFound){
        setValid(validationForm)
      }else{
        setValid(false)
      }      
    }else{
      setValid(false)
    }

  },[fields,initialDate,quarantineGroups])

  useEffect(()=>{
    /* console.log('modalsetting:::>',modalSettings) */
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

  const convertArrayToObject = (array, key) => {
    const initialValue = {}
    return array.reduce((obj, item) => {      
      return {
        ...obj,
        [item[key]]: {...item[item[key]]},
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
    let newCycle = schemaCyclicRestrictions
    newCycle.grace_time = initialDate 
    newCycle.global_quarantine = globalCuarantineTimeInput.value
    newCycle.global_quarantine_units = globalCuarantineTimeSelect.value
    newCycle.restriction_mode = timeWithoutRestrictionsModeSelect.value
    newCycle.time_without_restrictions = timeWithoutRestrictionsInput.value
    newCycle.time_without_restrictions_units = timeWithoutRestrictionsSelect.value
    const newVariables = schemaQuarantineGroups(quarantineGroups)
    newCycle.variables = convertArrayToObject(newVariables,'identifier')
    console.log({...quarantineConfig,cyclic_restrictions:newCycle})
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