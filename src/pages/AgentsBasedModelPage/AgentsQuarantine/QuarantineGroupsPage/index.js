import { Grid } from '@material-ui/core'
import React, { useState }  from 'react'
import AgentsTable from '../../../../components/AgentsModels/AgentsTable'
import AgentsTableConfiguration from '../../../../components/AgentsModels/AgentsTableConfiguration'
import CompartmentalButton from '../../../../components/CompartmentalModels/CompartmentalButton'
import { useAgentsDiseaseStateGroups } from './state'
import SnackbarComponent from '@components/ui/Snackbars'

const QuarantineGroupsPage = () => {

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  
  const {    
    tableColumns,
    items,  
    schemaItems,
    setItems,
    fields,
    isValid,
    handleSaveQuarantineGroups
  }= useAgentsDiseaseStateGroups({showSnack,setShowSnack})


  const handlerSaveInformation = () => {
    handleSaveQuarantineGroups(fields,items)
  }
  return (
    <Grid  container xs={12} justify='center' alignItems='center'>
      <Grid 
        justify='flex-start'
        alignItems='center'
        container
        style= {{'padding-bottom  ': '40px'}} 
        item 
        xs={12}>
        <AgentsTable
          tableFields={fields}          
        />  
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
          columns={tableColumns}
          initialItems={items}
          setItems={setItems}
          schemaItems={schemaItems}
          handleSettings={({index,item})=>{              
            console.log(item)          
          }}  
          handleItemDeleted={({index,item})=>{
            items.splice(index,1)
            setItems([...items])       
          }}             
        />  
      </Grid>

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
        onClick={handlerSaveInformation}
        disabled={!isValid?true:false}
      />
    </Grid>
  )
}

export default QuarantineGroupsPage
