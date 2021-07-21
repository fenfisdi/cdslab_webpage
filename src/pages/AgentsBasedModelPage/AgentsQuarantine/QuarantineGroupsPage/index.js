import { Grid } from '@material-ui/core'
import React  from 'react'
import AgentsTableConfiguration from '../../../../components/AgentsModels/AgentsTableConfiguration'
import { useAgentsDiseaseStateGroups } from './state'


const QuarantineGroupsPage = () => {

  const {    
    tableColumns,
    items,  
    schemaItems,
    setItems,
  }= useAgentsDiseaseStateGroups()

  return (
    <Grid  container xs={12} justify='center' alignItems='center'>
      <Grid 
        justify='flex-start'
        alignItems='center'
        container 
        item 
        xs={10}>
        <AgentsTableConfiguration
          showConfig={false}
          showCheck={false}            
          columns={tableColumns}
          initialItems={items}
          setItems={setItems}
          schemaItems={schemaItems}
          handleSettings={({index,item})=>{              
            console.log(item)          
          }}  
          handleItemDeleted={({index,item})=>{
            console.log(item)    
          }}             
        />  
      </Grid>
    </Grid>
  )
}

export default QuarantineGroupsPage
