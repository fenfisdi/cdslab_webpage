import { Breadcrumbs } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { useContext, useState, Fragment } from 'react'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import { OPTIONS_MODAL } from '../../../constants/agents'
import AgentsBaseContext from '../../../context/agentsBase.context'
import whitAgentsBaseHOC from '../../../utils/agentsBaseHOC'
import { renderComponentChildre } from '../../../utils/common'
const DiseaseStateNamePage=()=>{
  const context = useContext(AgentsBaseContext)
  const { distributionList } = context
  const tableColumns = [
    { 
      title: 'Disease State Name', 
      att: 'name', 
      type: 'text',
      inputProps: { fullWidth: true }
    },
  ]
  const schemaItems={
    name: '',
    distribution: {
      'identifier':'',
      'name':'',
      'distribution_type':'',
      'distribution_name':'',
      'distribution_filename':'',
      'distribution_extra_arguments': {}
    },      
  }
  const initialItems = [{...schemaItems}]

  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.DISEASE_STATE)
  const [modalSettings,setModalSettings] = useState({
    open:false,
    item:{},
    index:0
  })

  const Component = renderComponentChildre(componentChildren, {
    modalSettings,
    componentChildren,
    setComponentChildren:setComponentChildren,
    setModalSettings:setModalSettings,
  })
  const [items, setItems] = useState(initialItems)
  const redirectToSusceptibilityGroupsPage = () => {
    history.push({
      pathname: 'DiseaseStetaName' 
    })
  }
  return(
    <Fragment>
      <Grid container item xs={12} justify='center' alignItems='center'>
        <Grid container item xs={10}
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid><Breadcrumbs /></Grid>
          <Grid><SupportComponent title="Help" text={'llego 00000000'} /></Grid>
        </Grid>
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
          distributionType="Mobility"
          columns={tableColumns}
          initialItems={initialItems}
          setItems={setItems}
          schemaItems={schemaItems}
          handleSettings={({index,item}) => {
            setComponentChildren(OPTIONS_MODAL.DISEASE_STATE)
            setModalSettings(
              {...modalSettings, open:true, item, index}
            )
          }}          
        />  
        <AgentsModalContainer          
          open={modalSettings.open}
          handleClose={()=>{
            setModalSettings({...modalSettings, open:false})
          }}          
          render={Component}
        />
        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Continue'
          onClick={redirectToSusceptibilityGroupsPage}
          disabled={false}            
        />
      </Grid>
      {distributionList.length == 0 && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
    </Fragment>
  )
}
export default whitAgentsBaseHOC(DiseaseStateNamePage)