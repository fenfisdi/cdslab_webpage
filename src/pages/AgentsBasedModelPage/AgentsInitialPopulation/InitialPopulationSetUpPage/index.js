import React, { useEffect, useState }  from 'react'
import { Grid } from '@material-ui/core'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { HELP_INFORMATION_AGE_MODELS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../../components/SupportComponent'
import InitialPopulationTable from './children/InitialPopulationTable'
import { useInitialPopulationSetUpState } from './state'
import { renderComponentChildre } from '../../../../utils/common'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { AgentsModalContainer } from '../../../../components/AgentsModels/AgentsModalContainer'
import SnackbarComponent from '@components/ui/Snackbars'

const InitialPopulationSetUpPage = () => {
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })

  const [groupsArray, setGroupsArray] = useState([])

  const [showError, setShowError] = useState(false)

  const {    
    fieldsToTable,
    itemsTable,
    optionsByItem,
    configurationList, 
    objectRequest,
    idConfiguration,
    setObjectRequest,   
    setConfigurationList,
    handlerAddOption,
    postPopulation,
    setItemTable
  } = useInitialPopulationSetUpState({
    modalSettings,
    setModalSettings,
    setGroupsArray,
    setShowError})


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
    if(configurationList.length>1){            
      const [first, ...rest] = configurationList
      const arr = [...rest,first]
      setGroupsArray(recursive(arr,0))
    }
  },[configurationList])



  const recursive = (dataArray, pos) => {
    let jsonList = []
    
    for (let i = 0; i < dataArray[pos].length; i++) {
      let jsonRes = {
        'name' : dataArray[pos][i].name,
        'value' : dataArray[pos][i]?.value
      }
      jsonList.push(jsonRes)
    }

    if((pos + 1) < dataArray.length){
      let child = [...recursive([...dataArray],(pos + 1))]
      for (let i = 0; i < jsonList.length; i++) {
        jsonList[i]['children'] = JSON.parse(JSON.stringify(child))
      }
    }
    return [...jsonList]
  }

  const formatInfoRecursive = (dataArray) => {
    let jsonList = {}
    for (let i = 0; i < dataArray.length; i++) {
        if(Object.prototype.hasOwnProperty.call(dataArray[i], 'children')){
          jsonList[dataArray[i]['name']] = formatInfoRecursive(dataArray[i]['children'])
        }else{
          jsonList[dataArray[i]['name']] = dataArray[i]['value']
        }
    }
    return jsonList
  }

  
  const handleSaveInfo = () => {
    
    const requestObject={
      'variable': objectRequest.variable,
      'chain':objectRequest.chain,
      'values':formatInfoRecursive(groupsArray),
      'state':'CONFIGURED'
      }            
    
    postPopulation(idConfiguration,requestObject).then((response)=>{
      console.log(response)
      setObjectRequest({
        'variable': '',
      'chain': [],
      'values': {},
      'state':''
      })
      let newItemsTable = [...itemsTable]
      newItemsTable[modalSettings.index] = requestObject
      setItemTable([...newItemsTable])
      setModalSettings({
        open:false,
        item:{},
        index:0
      })
    }) 
  }

  const handleCloseSnack =()=>{
    setShowError(false)
  }

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
    setConfigurationList,
    handleSaveInfo
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

{showError && <SnackbarComponent
          snackDuration={3500}
          handleCloseSnack={handleCloseSnack}
          configData={{show:showError, error:showError}}                   
          errorMessage={'No se puede eliminar configuracion verifique que no este usada en otra configuracion'} />}
      
    </Grid>
  )
}

export default InitialPopulationSetUpPage
