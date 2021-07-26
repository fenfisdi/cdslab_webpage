import { Grid } from '@material-ui/core'
import React, { useState }  from 'react'
import AgentsTableConfiguration from '../../../../components/AgentsModels/AgentsTableConfiguration'
import CompartmentalButton from '../../../../components/CompartmentalModels/CompartmentalButton'
import { useQuarantineTracingRestrictions } from './state'
import SnackbarComponent from '@components/ui/Snackbars'

const QuarantineTracingRestrictionsPage = () => {

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }
  
  const {    
    tableColumns,
    items,  
    schemaItems,
    setItems,
    isValid,
    handleSaveQuarantineGroups
  }= useQuarantineTracingRestrictions({showSnack,setShowSnack})


  const handlerSaveInformation = () => {
    handleSaveQuarantineGroups(items)
  }
  return (
    <Grid  container xs={12} justify='center' alignItems='center'>
      <Grid 
        justify='flex-start'
        alignItems='center'
        container 
        item 
        xs={10}>
        <AgentsTableConfiguration
          showConfig={true}
          showCheck={true}            
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

export default QuarantineTracingRestrictionsPage
