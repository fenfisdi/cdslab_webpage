import React, { useEffect, useState }  from 'react'
import { Grid } from '@material-ui/core'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { HELP_INFORMATION_AGE_MODELS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../../components/SupportComponent'
import InitialPopulationTable from './children/InitialPopulationTable'
import { useInitialPopulationSetUpState } from './state'
import ActionZoneInitialPopulation from './children/ActionZone'
import { renderComponentChildre } from '../../../../utils/common'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { AgentsModalContainer } from '../../../../components/AgentsModels/AgentsModalContainer'

const InitialPopulationSetUpPage = () => {
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })

  const {    
    fieldsToTable,
    itemsTable,
    optionsByItem,
    configurationList, 
    objectRequest,
    setObjectRequest,   
    setConfigurationList,
    handlerAddOption,
  } = useInitialPopulationSetUpState({modalSettings,setModalSettings})

  const [groupsArray, setGroupsArray] = useState([])

  const getDataFilters = (data=[],valueSlected)=>{
    const variableNestingList  = data.map((variableNesting)=>{
      return {
        name : variableNesting?.name
      } 
    })
    setObjectRequest({...objectRequest,chain:[...objectRequest.chain,valueSlected]})
    setConfigurationList([...configurationList,variableNestingList])    
  }

  useEffect(()=>{
    console.log('::::::::::::::::::::>configurationList',configurationList)
    if(configurationList.length>0){            
      const [first, ...rest] = configurationList
      const arr = [...rest,first]
      recursive(arr,0)
    }
  },[configurationList])

  useEffect(()=>{
    console.log('useEffe groupsArray::::::::::::>',groupsArray)
  },[groupsArray])


  const recursive = (dataArray, pos) => {
    var jsonList = []
    
    for (let i = 0; i < dataArray[pos].length; i++) {
      var jsonRes = {
        'name' : dataArray[pos][i].name,
        'value' : dataArray[pos][i]?.value
      }
      jsonList.push(jsonRes)
    }

    if((pos + 1) < dataArray.length){
      var child = recursive(dataArray,(pos + 1))
      for (let i = 0; i < jsonList.length; i++) {
        jsonList[i]['children'] = child
      }
    }
    setGroupsArray(jsonList)
    return jsonList
  }

  
  useEffect(()=>{
    console.log('useEffec objectRequest:::::>',objectRequest)
  },[objectRequest])

  const Component = renderComponentChildre(OPTIONS_MODAL.INITIALPOPULATION,{  
    modalSettings,
    objectRequest,
    configurationList,
    groupsArray, 
    setGroupsArray,
    setObjectRequest,
    setModalSettings,
    hanldeDone:()=>{},
    getDataFilters,
    setConfigurationList
  })
  
  
 
  return (
    <Grid container xs={12} direction='column'>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_AGE_MODELS} /></Grid>
      </Grid>

      <Grid 
        justify='flex-start'
        alignItems='center'
        container 
        item 
        xs={12}>
        <InitialPopulationTable 
          tableFields={fieldsToTable} 
          itemsTable={itemsTable}
          optionsByItem={optionsByItem}
          handlerAddOption={handlerAddOption}
          actionZone={ActionZoneInitialPopulation}
        />     
      </Grid>
      <AgentsModalContainer
        modalTitle=''       
        open={modalSettings.open}
        handleClose={()=>{
          setModalSettings({...modalSettings,open:false})
        }}          
        render={Component}
      />
      
    </Grid>
  )
}

export default InitialPopulationSetUpPage
