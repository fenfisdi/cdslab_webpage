import { Grid } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React, { Fragment, useContext, useState } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { OPTIONS_MODAL } from '../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import AgentsBaseContext from '../../../context/agentsBase.context'
import whitAgentsBaseHOC from '../../../utils/agentsBaseHOC'
import { renderComponentChildre } from '../../../utils/common'
import { useAgentsDiseaseStateGroups } from './state'



const AgentsDiseaseStateGroupsPage = () => {
  
  const context = useContext(AgentsBaseContext)
  const { distributionList,parameterList } = context
  
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  
  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISTRIBUTION)
  
  const {
    handleClickSaveDiseaseStateGroups,
    tableColumns,
    items, 
    setItems,
    schemaItems,
    isValid,
    saveDiseaseStateGroupsItem,    
    deleteDiseaseStateGroupItem
  }= useAgentsDiseaseStateGroups({modalSettings,setModalSettings,setComponentChildren})

  
  
  const Component = renderComponentChildre(componentChildren,{
    optionsConfigured:items,
    distributionList,
    parameterList,
    modalSettings,
    componentChildren,
    handlerDataStorage:saveDiseaseStateGroupsItem,
    setComponentChildren:setComponentChildren,
    setModalSettings:setModalSettings
  })

  return (
    <Fragment>
      {distributionList.length > 0 && items.length>0 && !isEmpty(parameterList) && <Grid container item xs={12} justify='center' alignItems='center'>
        <Grid container item xs={10}
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid><Breadcrumbs /></Grid>
          <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
        </Grid>
      
        <Grid 
          justify='flex-start'
          alignItems='center'
          container 
          item 
          xs={10}>
          <AgentsTableConfiguration
            showConfig={true}
            showCheck={true}
            distributionType="Disease state name"
            columns={tableColumns}
            initialItems={items}
            setItems={setItems}
            schemaItems={schemaItems}
            handleSettings={({index,item})=>{              
              setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
              setModalSettings({...modalSettings,open:true,item,index})
            }}  
            handleItemDeleted={({item})=>{
              deleteDiseaseStateGroupItem(item)
            }}            
          />  
        </Grid>

        <AgentsModalContainer
          modalTitle='Disease state name'       
          open={modalSettings.open}
          handleClose={()=>{
            setModalSettings({...modalSettings,open:false})
          }}          
          render={Component}
        />

        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Continue'
          onClick={()=>{
            handleClickSaveDiseaseStateGroups(items)
          }}
          disabled={!isValid?true:false}
        />                
      </Grid>}
      {isEmpty(parameterList) &&  <LoaderComponent width="100px" height={100} marginTop="100px" />}   
    </Fragment>
  )
}

export default whitAgentsBaseHOC(AgentsDiseaseStateGroupsPage)
