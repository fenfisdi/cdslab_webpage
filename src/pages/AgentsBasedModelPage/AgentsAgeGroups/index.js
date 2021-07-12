import React, {Fragment}  from 'react'
import { Grid } from '@material-ui/core'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsAgeGroups } from './state'
import Breadcrumbs from '../../../components/Breadcrumbs'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_AGE_MODELS } from '../../../constants/helpInformation'
import AgentsTableConfiguration from '../../../components/AgentsModels/AgentsTableConfiguration'
import LoaderComponent from '../../../components/ui/Loader'

const AgentsAgeGroups = () => {

  const { 
    handleClickSaveAgentsAgeModel,    
    items,
    tableColumns,
    setItems,
    isValid
  } = useAgentsAgeGroups()



  return (
    <Grid container xs={12} direction='column'>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_AGE_MODELS} /></Grid>
      </Grid>

      {items.length>0 && <Fragment>
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
            initialItems={items}
            setItems={setItems}            
            handleItemDeleted={({index})=>{                             
              items.splice(index,1)
              setItems([...items])              
            }}
          />
        </Grid>
      
        <CompartmentalButton
          justify='flex-end'
          alignItems='center'
          text='Continue'
          onClick={()=>{handleClickSaveAgentsAgeModel(items)}}
          disabled={!isValid?true:false}           
        />
      </Fragment>}

      {items.length == 0 && <LoaderComponent width="100px" height={100} marginTop="100px" />}
      
    </Grid>
  )
}

export default AgentsAgeGroups
