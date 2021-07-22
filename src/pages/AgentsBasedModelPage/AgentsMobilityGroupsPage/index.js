import { Grid } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React, { useContext, useState, Fragment } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { OPTIONS_MODAL } from '../../../constants/agents'
import { HELP_INFORMATION_MOBILITY_MODELS } from '../../../constants/helpInformation'
import AgentsBaseContext from '../../../context/agentsBase.context'
import whitAgentsBaseHOC from '../../../utils/agentsBaseHOC'
import { deleteItemsConfigureTable, renderComponentChildre } from '../../../utils/common'
import { useAgentsMobilityGroups } from './state'
import SnackbarComponent from '@components/ui/Snackbars'

const AgentsMobilityGroups = () => {
  const context = useContext(AgentsBaseContext)
  const { distributionList,parameterList } = context
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISTRIBUTION)

  const {
    
    tableColumns,
    items,     
    schemaItems,
    isValid,
    setItems,
    handleClickSaveMobilityGroups,
    saveMobilityGroupsItem,
    deleteMobilityGroupsItem,
    parseInformationMobilityGroupsItem,
    saveMobilityGroupItem
  }= useAgentsMobilityGroups({modalSettings,setModalSettings,setComponentChildren, showSnack, setShowSnack })

  
  
  const Component = renderComponentChildre(componentChildren,{
    optionsConfigured:items,
    distributionList,
    parameterList,
    modalSettings,
    componentChildren,
    handlerDataStorage:saveMobilityGroupsItem,
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
          <Grid><SupportComponent title="Help" text={HELP_INFORMATION_MOBILITY_MODELS} /></Grid>
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
            distributionType="Mobility Group"
            columns={tableColumns}
            initialItems={items}
            setItems={setItems}
            schemaItems={schemaItems}
            handleSettings={({index,item})=>{
              if(item.state.trim().length == 0){
                saveMobilityGroupItem(item).then((mobilityGroupResponse)=>{
                  const { mobilityGroup } = mobilityGroupResponse || {}
                  const newItem =  parseInformationMobilityGroupsItem(mobilityGroup)          
                  items[index] = newItem
                  setItems([...items])
                  setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
                  setModalSettings({...modalSettings,open:true,item:newItem,index})
                })
              }else{
                setModalSettings({...modalSettings,open:true,item:parseInformationMobilityGroupsItem(item),index})
              }              
            }}
            handleItemDeleted={({index,item})=>{
              const itemToDelete = deleteItemsConfigureTable(item,items,index)              
              if(Array.isArray(itemToDelete)){
                setItems([...itemToDelete])
              }else {
                deleteMobilityGroupsItem(itemToDelete)              
              }
            }}    
          />  
        </Grid>

        <AgentsModalContainer
          modalTitle='Mobility profile'       
          open={modalSettings.open}
          handleClose={()=>{
            setModalSettings({...modalSettings,open:false})
          }}          
          render={Component}
        />

        {showSnack && showSnack.show && <SnackbarComponent
          snackDuration={3500}
          configData={showSnack}
          handleCloseSnack={handleCloseSnack}
          successMessage={showSnack.successMessage}
          errorMessage={showSnack.errorMessage} />}

        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Continue'
          onClick={()=>{
            handleClickSaveMobilityGroups(items)
          }}
          disabled={!isValid?true:false}
        />
      </Grid>}
      
      {isEmpty(parameterList) &&  <LoaderComponent width="100px" height={100} marginTop="100px" />}
    </Fragment>
  )
}

export default whitAgentsBaseHOC(AgentsMobilityGroups)
