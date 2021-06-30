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
import { renderComponentChildre } from '../../../utils/common'
import { useAgentsMobilityGroups } from './state'

const AgentsMobilityGroups = () => {
  const context = useContext(AgentsBaseContext)
  const { distributionList,parameterList } = context
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  const {
    handleClickSaveMobilityGroups,
    tableColumns,
    items, 
    setItems,
    schemaItems,
    isValid
  }= useAgentsMobilityGroups({modalSettings})

  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISTRIBUTION)
  
  const Component = renderComponentChildre(componentChildren,{
    optionsConfigured:items,
    distributionList,
    parameterList,
    modalSettings,
    componentChildren,
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
              console.log(index)
              console.log(item)
              setComponentChildren(OPTIONS_MODAL.DISTRIBUTION)
              setModalSettings({...modalSettings,open:true,item,index})
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