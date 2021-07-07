import React, { useContext, useState, Fragment } from 'react'
import { Divider, Grid } from '@material-ui/core'
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
import { useAgentsMobilityGroups } from '../AgentsMobilityGroups/state'
import { useHistory } from 'react-router-dom'

const DiseaseStateNamePage = () => {
  const context = useContext(AgentsBaseContext)
  const { distributionList } = context
  const {
    items, 
    setItems,
    schemaItems,
  }= useAgentsMobilityGroups()
  const history = useHistory()
  const goToForm =()=>{
    history.push({
      pathname: 'DiseaseStetaName'
    })
  }

  const titleColumnsTable = [
    { 
      title: 'Disease State Name', 
      att: 'name', 
      type: 'text',
      inputProps: { fullWidth: true }
    },
  ]
  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISEASE_STATE)
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })
  
  const Component = renderComponentChildre(componentChildren,{
    distributionList,
    modalSettings,
    componentChildren,
    setComponentChildren:setComponentChildren,
    setModalSettings:setModalSettings
  })

  return (
    <Fragment>
      {distributionList.length > 0 && <Grid container item xs={12} justify='center' alignItems='center'>
        
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
          <Divider variant="middle" orientation='horizontal' light='true' />
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
            distributionType="Disease State Name"
            columns={titleColumnsTable}
            initialItems={items}
            setItems={setItems}
            schemaItems={schemaItems}
            handleSettings={({index,item})=>{
              setComponentChildren(OPTIONS_MODAL.DISEASE_STATE)
              setModalSettings({...modalSettings,open:true,item,index})
            }}          
          />  
        </Grid>
        <AgentsModalContainer          
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
          onClick={goToForm}
          disabled={false}            
        />
      </Grid>}
      
      {distributionList.length == 0 && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
    </Fragment>
  )
}

export default whitAgentsBaseHOC(DiseaseStateNamePage)
