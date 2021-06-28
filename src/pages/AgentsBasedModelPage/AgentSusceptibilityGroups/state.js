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

  const parseInformationSusceptibilityGroupsModel =(arrayMobility=[])=>{
    return arrayMobility.map((mobility)=>{
      return {
        name:mobility.name,
        distribution:mobility.distribution,
        state: 'CONFIGURED'       
      }
    })

  }

  const checkSusceptibilityGroupsList = (mobilityGroupsList)=>{
    const itemsConfigured =[]
    mobilityGroupsList.forEach((item) => {       
      item.state == 'CONFIGURED' && item.name.trim().length>0 && itemsConfigured.push(true)            
    })      
    return itemsConfigured.length == mobilityGroupsList.length 
  }
  
  const { saveSusceptibilityGroupsInformation, getSusceptibilityGroupsInformation } = useAgentsSusceptibilityGroupsActionsActions(dispatch)
  
  const schemaItems={
    name: '',
    distribution: {
      'name':'',
      'distribution_type':'',
      'distribution_name':'',
      'distribution_filename':'',
      'distribution_extra_arguments': {}
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
    if(data.length == 0 && !error && idConfiguration!=''){
      getSusceptibilityGroupsInformation(idConfiguration)
    }else if(data.length > 0 && !error){
      console.log('ARRAYR SusceptibilityGroups::::::::::::::::::::::>',data)      
      setItems(parseInformationSusceptibilityGroupsModel(data))
    }
  },[data,error,idConfiguration])
  

  const redirectToSusceptibilityGroupsPage = () => {
    console.log('redireccionar')
    /* history.push({
      pathname: 'agentSusceptibilityGroups'
    }) */
  }

  const handleClickSaveMobilityGroups =(information)=>{    
    saveSusceptibilityGroupsInformation(information,idConfiguration).then(()=>{      
      getSusceptibilityGroupsInformation(idConfiguration)
      redirectToSusceptibilityGroupsPage()
    })
    
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveMobilityGroups,
    isValid
  }
    
  
}
