import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_AGE_MODELS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import { AgentsDistribution } from '../../../components/AgentsModels/AgentsDistribution'
import { AgentsModalContainer } from '../../../components/AgentsModels/AgentsModalContainer'
const AgentsAgeGroups = () => {

  
  const [componentChildren, setComponentChildren] = useState('distribution')

  const { 
    handleClickSaveAgentsAgeModel,
    openSettings,
    handleSettings,
    handleCloseSettings,
    currentIndex,
    items,
    tableColumns
  } = useAgentsAgeGroups()

  const renderComponentChildre = () => {
    switch (componentChildren) {
    case 'distribution':
      return (
        <AgentsDistribution 
          setComponentChildren={setComponentChildren}
          handleClose={handleCloseSettings}
        />
      )
    case 'Empirical':
      return (<h1>Empirical</h1>)
    case 'Constant':
      return (<h1>constant</h1>)
    case 'Weigths':
      return (<h1>Weigths</h1>) 
    case 'Numpy':
      return (<h1>Numpy</h1>) 
    default:
      return (<AgentsDistribution />)
    }
    
  } 


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
        xs={10}>        
        <AgentsTableConfiguration
          showConfig={false}
          showCheck={false}
          distributionType="Age Group"
          columns={tableColumns}
          initialItems={items
          }
          handleSettings={handleSettings}
          setComponentChildren={setComponentChildren}
        />

        <AgentsModalContainer
          distributionType="Age Group"
          open={openSettings}
          handleClose={handleCloseSettings}
          currentItem={items[currentIndex]}
        >
          {renderComponentChildre}
        </AgentsModalContainer>
      </Grid>
      
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={()=>{handleClickSaveAgentsAgeModel(items)}}
        disabled={false}            
      />
      
    </Grid>
  )
}

export default AgentsAgeGroups
