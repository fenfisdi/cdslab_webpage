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
    setConfigurationList,
    handlerAddOption,
  } = useInitialPopulationSetUpState({modalSettings,setModalSettings})

  const getDataFilters = (data=[])=>{
    const variableNestingList  = data.map((variableNesting)=>variableNesting?.name)
    setConfigurationList([...configurationList,variableNestingList])    
  }

  useEffect(()=>{
    if(configurationList.length>0){            
      const [first, ...rest] = configurationList
      const arr = [...rest,first]
      console.log('configurationList:::::::::>',configurationList)
      console.log('newArray::>',arr)
    }
  },[configurationList])

  const Component = renderComponentChildre(OPTIONS_MODAL.INITIALPOPULATION,{  
    modalSettings,  
    setModalSettings,
    hanldeDone:()=>{},
    getDataFilters
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
