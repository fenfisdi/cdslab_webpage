import { Grid } from '@material-ui/core'
import { isEmpty } from 'lodash'
import React, { Fragment, useContext, useState } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import { OPTIONS_MODAL } from '../../../constants/agents'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
import AgentsBaseContext from '../../../context/agentsBase.context'
import whitAgentsBaseHOC from '../../../utils/agentsBaseHOC'
import { renderComponentChildre } from '../../../utils/common'
import { useAgentSusceptibilityGroups } from './state'


const AgentSusceptibilityGroups = () => {
  
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
  }= useAgentSusceptibilityGroups({modalSettings})

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
            distributionType="Susceptibility distribution"
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
    </Fragment>
  )
}

export default whitAgentsBaseHOC(AgentSusceptibilityGroups)
